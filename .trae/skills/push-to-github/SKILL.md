---
name: "push-to-github"
description: "将项目所有改动提交并推送到 GitHub 仓库 https://github.com/12345678smw/xiaoshen。当用户要求 commit、push、同步或上传项目到 GitHub 时调用。"
---

# 推送到 GitHub

将当前项目的所有改动提交（commit）并推送（push）到 GitHub 仓库：
`https://github.com/12345678smw/xiaoshen`

## 前提

- 已配置 GitHub SSH 公钥（用户已确认）
- 项目已在 Git 仓库中

## 执行步骤

### 1. 确认并配置远程仓库

检查是否已存在名为 `github` 的远程仓库，若不存在则添加：

```powershell
git remote -v
```

如果没有指向 `git@github.com:12345678smw/xiaoshen.git` 的远程，执行添加（命名为 `github`）：

```powershell
git remote add github git@github.com:12345678smw/xiaoshen.git
```

如果远程已存在但 URL 不正确，使用 `set-url` 修正：

```powershell
git remote set-url github git@github.com:12345678smw/xiaoshen.git
```

> 说明：保留原有 `origin`（如 Gitee）不动，新增 `github` 远程用于推送 GitHub，避免影响已有远程。

### 2. 暂存所有改动

```powershell
git add -A
```

### 3. 提交

提交信息使用中文，格式参考：

```powershell
git commit -m "更新项目文件"
```

- 若无改动可提交，跳过此步并告知用户。
- 若用户指定了提交信息，使用用户提供的信息。

### 4. 推送到 GitHub

```powershell
git push github master
```

> 如果默认分支不是 `master`（例如 `main`），先执行 `git branch` 查看当前分支名，再将命令中的 `master` 替换为实际分支名。

### 5. 验证

```powershell
git remote -v
git log --oneline -5
```

确认推送成功后，告知用户已提交并推送到 GitHub。

## 注意事项

- 使用 SSH 地址 `git@github.com:12345678smw/xiaoshen.git` 而非 HTTPS，因为用户已配置公钥。
- 推送前确保 `git status` 中所有改动都已暂存（`git add -A`）。
- 如果遇到推送冲突，先 `git pull github master --rebase` 再推送，并告知用户有冲突需要处理。
- 所有命令在项目根目录 `e:\网页设计（大三上）` 下执行。
