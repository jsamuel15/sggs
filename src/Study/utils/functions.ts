// Máscara de CPF
const MaskIdentifier = (v: string): string => {
    const cpfFormatted = v?.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1-$2');
    return cpfFormatted;
};

// Máscara de Telefone
const MaskPhone = (v: string): string => {
    let valueInitial = v?.replace(/\D/g, '').replace(/^0/, '') || '';
    if (valueInitial.length > 11) {
        valueInitial = valueInitial.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (valueInitial.length > 7) {
        valueInitial = valueInitial.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, '($1) $2-$3');
    } else if (valueInitial.length > 2) {
        valueInitial = valueInitial.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
    } else if (v?.trim() !== '') {
        valueInitial = valueInitial.replace(/^(\d*)/, '($1');
    }
    return valueInitial;
};

// Máscara de Data
const dateMask = (input: string, v: string): string => {
    const allFormat = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', ''];
    let value = v;
    if (v.length >= 0 && v.length < 5) {
        if (input.length === 3 && v.length === 2) {
            value = v;
        } else if (v.length === 2) {
            value = `${v}/`;
        } else if (v.length === 3 && input.length === 2) {
            value = `${input}/${v.slice(-1)}`;
        }
    } else if (v.length >= 5) {
        if (input.length === 6 && v.length === 5) {
            value = v;
        } else if (v.length === 5) {
            value = `${v}/`;
        } else if (v.length === 6 && input.length === 5) {
            value = `${input}/${v.slice(-1)}`;
        }
    }
    return allFormat.includes(v.slice(-1)) ? value.substring(0, 10) : input;
};

// Mácara de Hora
const hoursMask = (input: string, v: string): string => {
    const allFormat = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ''];
    let value = v;
    const validationOneHours = Number(v.substring(0, 1)) >= 0 && Number(v.substring(0, 1)) <= 2;
    const validationTwoHours = () => {
        if (v.length === 2) {
            if (Number(v.substring(0, 1)) === 2) {
                return Number(v.substring(1, 2)) >= 0 && Number(v.substring(1, 2)) <= 3;
            }
            return Number(v.substring(1, 2)) >= 0 && Number(v.substring(1, 2)) <= 9;
        }
        return true;
    };
    const validationThreeHours = () => {
        if (v.length > 2) {
            const formatArray = v.includes(':') ? v.split(':') : v;
            const validationString = typeof formatArray === 'string' ? formatArray.slice(-1) : formatArray[1];
            const validationResult = () => {
                if (validationString.length > 0) {
                    if (validationString.length === 1) {
                        return Number(validationString) <= 5 && Number(validationString) >= 0;
                    }
                    return Number(validationString) <= 59 && Number(validationString) >= 0;
                }
                return true;
            };
            return validationResult();
        }
        return true;
    };
    if (validationOneHours && validationTwoHours() && validationThreeHours()) {
        if (input.length === 1 && v.length === 2) {
            value = `${v}:`;
        }
        if (input.length === 3 && v.length === 2) {
            value = `${v.substring(0, 2)}`;
        }
        if (input.length === 2 && v.length === 3) {
            value = `${input}:${v.slice(-1)}`;
        }
    } else {
        value = input;
    }
    return allFormat.includes(v.slice(-1)) ? value.substring(0, 5) : input;
};

export default {
    MaskPhone,
    MaskIdentifier,
    hoursMask,
    dateMask,
};
