let actual_banner = 1;
const qnt_banners = 6;

export function switchBanner(n_banner){
    let banners = document.getElementById('banners');
    banners.style.left = `-${n_banner - 1}00vw`;
    actual_banner = n_banner;

    for(let i = 1; i < qnt_banners + 1; i++){
        let btn = document.getElementById(`btn_banner_${i}`);
        if(n_banner == i){
            btn.style.transform = 'scale(1.3)'
            btn.style.backgroundColor = "white"
        }else{
            btn.style.transform = 'scale(1)'
            btn.style.backgroundColor ="rgba(240, 248, 255, 0.528)"
        }
    }
}
setInterval(()=>{
    if(actual_banner >= qnt_banners){
        actual_banner = 0;
    }
    switchBanner(actual_banner + 1);
}, 15000);

for (let i = 1; i <= qnt_banners; i++) {
    let btn = document.getElementById(`btn_banner_${i}`);
    if (btn) {
        btn.addEventListener('click', () => switchBanner(i));
    }
}