var os = require('os');
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null){
        var instruction = input.toString().trim();
        switch(instruction){
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version_Node':
                process.stdout.write('Version: ' + process.versions.node + '\n');
                process.stdin.resume();
                break;
            case '/lang_Node':
                process.stdout.write('Lang: ' + process.env.lang + '\n');
                process.stdin.resume();
                break;
            case '/getOSinfo':
                getOSinfo();
                process.stdin.resume();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                process.stdin.resume();
        };
    }                
});

function getOSinfo(){
    var type = os.type();
    if(type === 'Darwin'){
        type = 'OSX';
    }else if(type === 'Windows_NT'){
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}