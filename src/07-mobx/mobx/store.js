import { observable, configure, action, runInAction } from "mobx";

configure({
    enforceActions:"always"
})

const store = observable({
    isShowTabbar : true,
    isShowTabbarOK(){ this.isShowTabbar=true},
    isShowTabbarNO(){ this.isShowTabbar=false}
},{
    isShowTabbarNO:action,
    isShowTabbarOK:action    //标记action
})


export default store
