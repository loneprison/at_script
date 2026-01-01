# @script

- 原仓库: https://github.com/atarabi/at_script
- 文档: https://atarabi.github.io/at_script/

## 说明

此分支从原项目中移除脚本与依赖，便于在开发环境通过 `git clone` 快速获取并开始开发。

## 主要改动

- 为方便区分原始 `AVLayer` 类型，将类型判定由 `AVLayer` 修改为 `RasterLayer`。

示例（修改前）：

```js
AVLayer = {
    return layer instanceof TextLayer || layer instanceof ShapeLayer || layer instanceof AVLayer;
}
```

修改后：

```js
RasterLayer = {
    return layer instanceof TextLayer || layer instanceof ShapeLayer || layer instanceof AVLayer;
}
```