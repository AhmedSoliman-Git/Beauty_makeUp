function useCountUp(el){
    const goal = el.dataset.goal ;
    const intervalTime = setInterval(()=>{
        el.textContent++ ;
        if(el.textContent == goal) {
            clearInterval(intervalTime);
        }
    },2000/goal)
}

export default useCountUp ;