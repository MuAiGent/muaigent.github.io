# MuAiGent 个人博客

这是我基于Jekyll的个人博客网站，托管在GitHub Pages上。

## 网站特点

- 响应式设计，适配各种屏幕尺寸
- 简洁美观的Strata风格主题
- 支持博客文章、分类和标签
- 优化的阅读体验

## 本地开发

如果您想在本地运行此网站，请按照以下步骤操作：

1. 安装Ruby和Bundler
2. 克隆这个仓库：`git clone https://github.com/MuAiGent/muaigent.github.io.git`
3. 进入项目目录：`cd muaigent.github.io`
4. 安装依赖：`bundle install`
5. 启动本地服务器：`bundle exec jekyll serve`
6. 在浏览器中访问：`http://localhost:4000`

## 网站结构

- `_posts/` - 博客文章目录
- `_layouts/` - 页面布局模板
- `_includes/` - 可重用的HTML组件
- `assets/` - CSS、JavaScript和图片资源
- `_config.yml` - Jekyll配置文件

## 添加新文章

要添加新的博客文章，请在`_posts`目录下创建一个新的Markdown文件，文件名格式为：`YYYY-MM-DD-title.md`。

文件开头需要包含YAML前置数据：

```yaml
---
layout: post
title: "文章标题"
date: YYYY-MM-DD HH:MM:SS +0800
categories: [分类1, 分类2]
tags: [标签1, 标签2]
image: /assets/images/image-name.jpg
---
```

然后在下面编写正文内容，使用Markdown格式。

## 许可证

本项目采用MIT许可证。
