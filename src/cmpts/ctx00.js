import React, {  useState,useContext } from 'react';







  let std_scroll = {
  

    nmro_scroll:null,
    stdo_p_scrol:null,
  
 
    exm:{
      stdo_exm: null,
      setstdo_exm:null,
      f_obn_stdo:(std0, std1)=>{
        std_scroll.exm.stdo_exm = std0
        std_scroll.exm.setstdo_exm = std1
      }},

      ptf:{
        stdo_ptf: null,
        setstdo_ptf:null,
        f_obn_stdo:(std0, std1)=>{
          std_scroll.ptf.stdo_ptf = std0
          std_scroll.ptf.setstdo_ptf = std1
        }},
    skill:{
        
        stdo_skll: null,
        setstdo_skll:null,
        f_obn_stdo:(std0, std1)=>{
          std_scroll.skill.stdo_skll = std0
          std_scroll.skill.setstdo_skll = std1
        }
    
      
      }
    
    }


   export let Contx_scroll = React.createContext(std_scroll)