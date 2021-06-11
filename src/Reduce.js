export const reduce = (state,data) =>{
    const { text, e} = data
    if(text === "close"){
        return {...state,isTooltipOpen:false}
    }
    return {...state,isTooltipOpen:true,content:data.text,target:e.target}
}