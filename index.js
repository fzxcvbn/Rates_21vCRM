let img_1arrow_rates_21vcrm = document.querySelector('.img-1arrow-rates-21vcrm'),
    img_2arrow_rates_21vcrm = document.querySelector('.img-2arrow-rates-21vcrm'),
    conteiner_element_rates_21vcrm = document.querySelector('.conteiner-element-rates-21vcrm'),
    p_title_rates_21vcrm = document.querySelector('.p-title-rates-21vcrm')


img_1arrow_rates_21vcrm.addEventListener("click", function() {
    conteiner_element_rates_21vcrm.style.display = 'block'
    img_1arrow_rates_21vcrm.style.transform = 'rotate(0deg)'
    img_2arrow_rates_21vcrm.style.transform = 'rotate(0deg)'
    setTimeout(() => {  
    img_1arrow_rates_21vcrm.style.display = 'none'
    img_2arrow_rates_21vcrm.style.display = 'block' }, 500);
})

img_2arrow_rates_21vcrm.addEventListener("click", function() {
    conteiner_element_rates_21vcrm.style.display = 'none'
    img_2arrow_rates_21vcrm.style.transform = 'rotate(90deg)'
    img_1arrow_rates_21vcrm.style.transform = 'rotate(90deg)'
    setTimeout(() => {  
        img_2arrow_rates_21vcrm.style.display = 'none'
        img_1arrow_rates_21vcrm.style.display = 'block' }, 500);
})