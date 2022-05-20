// // const fs = require('fs')
// const path = require('path')
// // 获取入口
// function getEntries() {
//     const entries = {};
//     // 目录路径
//     const dir = path.join("../../src/assets/music");
//     console.log(dir);
//     // 读取这个路径
//     // fs.readdirSync(dir).forEach((file) => {
//     //     const fullPath = path.join(dir, file);
//     //     // fs.statSync()方法用于异步返回有关给定文件路径的信息。
//     //     const stat = fs.statSync(fullPath);
//     //     // path.extname() 方法返回 path 的扩展名 .js/.html
//     //     const en = path.extname(fullPath);
//     //     const bn = path.basename(file);
//     //     // path.basename() 方法返回 path 的最后一部分
//     //     // 返回: 'quux.html' "quux.js"
//     //     if (stat.isFile() && en === ".mps") {
//     //         entries[bn.replace(".mp3", "")] = fullPath;
//     //     }
//     // });
//     // return entries;
// }
// console.log(getEntries());
