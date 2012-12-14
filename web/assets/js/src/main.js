require.config(
{
    baseUrl: '/',
    /*
    shim:{
        "Component/json2/json2":["Component/jquery/jquery"],
        "Component/jstorage/jstorage":["Component/jquery/jquery"],
        "Component/jquery.cookie/jquery.cookie":["Component/jquery/jquery"],
        "Component/jquery.scrollTo/jquery.scrollTo":["Component/jquery/jquery"]
    },
    */
    pkgs:[
        "src"
    ],
    paths:{
        "src":"assets/js/src",
        "Component":"components"
    }
});

require(
    ['src/myModule'],
    function(myModule) {
        console.log(myModule);
    });