```
// 查看
parcel src/index.html

// build
rm -rf dist
parcel build src/index.html --no-minify --public-url ./

// 修改提交的备注
git commit --amend
// 按 i 进入编辑，esc 退出编辑，:wq 保存退出
```
