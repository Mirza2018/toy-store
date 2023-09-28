import { useEffect } from "react"

const useTitle=(title)=>{

    useEffect(()=>{
    document.title=`${title}-Duplo-store`
    },[title])
}

export default useTitle;
