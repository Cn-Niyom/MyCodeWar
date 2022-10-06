//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/javascript

function past(h, m, s){
    if( h <0 || h > 23)
    {
        h = 0;
    }
    if( m < 0 || m > 59)
    {
        m = 0;
    }
    if( s < 0 || s > 59)
    {
        s = 0;
    }
    return h*3600000+m*60000+s*1000;
}