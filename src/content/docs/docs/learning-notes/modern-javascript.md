---
title: 现代 JavaScript 的异步思维
description: 从事件循环出发，理解 Promise 与 async/await 如何协作。
sidebar:
  order: 2
---

JavaScript 的异步并不神秘。最重要的一点是：**主线程一次只执行一段 JavaScript，而耗时任务完成后会把后续工作排进队列。**

## 先理解事件循环

浏览器执行一段脚本时，大致会处理三类东西：

1. 调用栈中正在执行的同步代码；
2. Promise 回调等微任务；
3. 定时器、网络事件等任务。

每轮同步代码结束后，运行时会先清空微任务队列，再开始下一个任务。

```js
console.log('A');

setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));

console.log('D');
// A → D → C → B
```

`setTimeout(..., 0)` 并不表示立刻执行，而是尽快把回调安排到后续任务中。

## Promise 是结果的占位符

Promise 表示一个现在还没有、但未来会得到的结果。链式调用的价值在于：每个步骤都返回新的 Promise，使成功和失败可以沿同一条链传播。

```js
function getUser(id) {
  return fetch(`/api/users/${id}`).then((response) => {
    if (!response.ok) throw new Error('用户加载失败');
    return response.json();
  });
}

getUser('42')
  .then((user) => console.log(user.name))
  .catch((error) => console.error(error));
```

## async/await 让控制流更直观

`async/await` 没有改变 Promise 的运行机制，只是让异步流程更接近同步代码的阅读顺序。

```js
async function showUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) throw new Error('用户加载失败');

    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.error(error);
  }
}
```

:::caution[不要无意中串行执行]
如果两个请求彼此独立，应先同时发起，再用 `Promise.all()` 等待结果；连续两个 `await` 会让它们依次执行。
:::

```js
const [user, projects] = await Promise.all([
  getUser('42'),
  getProjects('42'),
]);
```

## 实践检查清单

- 是否明确处理了非 2xx 的 HTTP 响应？
- 独立任务是否可以并行？
- 错误是在有足够上下文的位置处理的吗？
- 页面离开或请求过期时，是否需要用 `AbortController` 取消？

理解事件循环之后，异步代码就不再是一组需要背诵的语法，而是一套可以预测的调度规则。
