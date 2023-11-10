/*
 * 作者:tom-temp
 */

import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
// import App_first from "./01-base/aa_类组件"
// import Box2body from "./01-base/ab.嵌套"
// import App_ac_with_css from "./01-base/ac_组件样式"
// import App_ad_todo from "./01-base/ad_事件绑定"
// import App_ae_ref from "./01-base/ae_ref";
// import App_af_state from "./01-base/af_状态";
// import App_ag_todo from "./01-base/ag_todo_app";
// import App_ah_tab_switch from "./01-base/ah_选项卡";
// import App_ai_setstate from "./01-base/ai_setstate同步与异步";
// import App_aj_props from "./01-base/aj_属性";
// import App_ak_input from "./01-base/ak_input受控组件";
// import App_al_trans_value_to_father from "./01-base/al_子传父";
// import App_a1_input from "./02-middle/a1_表单域组件";
// import App_a2_connect from "./02-middle/a3_context通信";
// import App_life_doing_ex1 from "./02-middle/a6_生命周期_进行_案例1";
// import App_life_new from "./02-middle/a7_新生命周期1";
// import App_swiper from "./02-middle/a8_swiper-example";
import App_b1 from "./02-middle/b1_函数式-hooks"
import B2_func_todolist from "./02-middle/b2_useState_todolist";
import App_useEffect from "./02-middle/b3_useEffect_模拟生命周期";
import App_b4_usecallback from "./02-middle/b4_useCallback_备份状态";
import App_b7_useContext from "./02-middle/b7_useContext_跨级通信";
import App_b8_useReducer from "./02-middle/b8_useReducer";
import App_b9_useMyFunction_tab from "./02-middle/b9_useMyfunction";

const root = createRoot(document.getElementById("root"));
root.render(
    // <StrictMode>
        <App_b9_useMyFunction_tab/>
    // </StrictMode>
    )
