//argv[0] is the name of the script

console.log(process.argv);
console.log(process.argv[3]);

//process.env--system things : computername
console.log(process.env.LOGNAME);

//pid
console.log(process.pid);

//cwd
console.log(process.cwd());

//title
console.log(process.title);

//memory usage
console.log(process.memoryUsage());

//platform
console.log(process.platform);

//update()
console.log(process.uptime());

process.on("exit", function (code) {
    console.log("about to exit with code:", code);
});

//exit()
process.exit(); //已经被干掉
console.log("hello from ager exit");
