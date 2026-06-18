import { MAX_QUANTITY } from "../../shared/constants.js";

export function createQuantityBoxController({
    inputElement,
}) {
    function getValue() {
        return Number(inputElement.value) || 0;
    }

    function setValue(value){
        const safeValue = Math.min(Math.max(0, value), MAX_QUANTITY);
        inputElement.value = safeValue;
    }

    function increase(){
        setValue(getValue() + 1);
    }

    function decrease(){
        setValue(getValue() - 1);
    }

    function reset(){
        setValue(0);
    }

    return {
        getValue,
        setValue,
        increase,
        decrease,
        reset,
    };
}