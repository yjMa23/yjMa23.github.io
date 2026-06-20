---
title: 一套可长期使用的 Git 工作流
description: 用小提交、清晰分支和自动检查降低协作成本。
sidebar:
  order: 2
---

一套好的 Git 工作流应该回答三个问题：改了什么、为什么改，以及如何安全地合并。

## 从短生命周期分支开始

每个分支只承担一个明确目标，并尽快合并。分支名可以使用稳定的前缀：

```text
feat/search
fix/mobile-navigation
docs/deployment-guide
```

## 保持提交小而完整

一个理想提交应当可以独立解释，并且不会让项目处于不可构建状态。

```bash
git add src/pages/search.astro
git commit -m "feat: add documentation search page"
```

提交信息描述结果，不必复述文件名。常用类型包括 `feat`、`fix`、`docs`、`refactor` 和 `test`。

## 推送前自检

```bash
npm run check
npm run build
git diff --check
```

自动化检查无法替代思考，但可以拦住格式错误、类型问题和无法构建的提交。

## 合并后的整理

合并后删除已完成分支，更新本地主分支，再开始下一项工作：

```bash
git switch main
git pull --ff-only
git branch -d feat/search
```

:::note
流程的目的不是制造仪式，而是让变更保持可读、可验证、可撤销。
:::
