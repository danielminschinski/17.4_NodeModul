var os = require('os');
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
export.print = getOSinfo;