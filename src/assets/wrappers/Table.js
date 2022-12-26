import Styled from "styled-components";

const Wrapper = Styled.div`
.btn_settings{
    background: rgb(245, 245, 245) ;
    margin: 4px;
    border-left: 4px blue solid ;
    border-radius: 6px;
}
.hide_icon{
    cursor: pointer;
       
}
.hide_icon:hover {
    transform: scale(1.5);
}
.setting_btn{
    border-radius: 10px;
}
.font_weight{
    font-weight: normal;
}
`;

export default Wrapper;
