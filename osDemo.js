import os from "os";

//与cpu, memory交互
console.log("CPU的核数：" + os.cpus().length);
console.log("系统内存总量：" + os.totalmem() / 1024 / 1024 + "MB");
console.log("系统空闲内存量：" + os.freemem() / 1024 / 1024 + "MB");

//userInfo()
console.log(os.userInfo());

//totalmem()
console.log(os.totalmem());

//freemem()
console.log(os.freemem());

//cpus()
console.log(os.cpus());
