import React from 'react'
import css_jun from "./Junior.module.css"
import HW7 from "../../../h7/HW7";
import HW8 from "../../../h8/HW8";
import HW9 from "../../../h9/HW9";
import HW10 from "../../../h10/HW10";


function PreJunior() {
    return (
        <div className={css_jun.wrapper}>
            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>
            {/*<HW11/>*/}

        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун7-11 и джун+12
// туда будут добавляться следующие дз