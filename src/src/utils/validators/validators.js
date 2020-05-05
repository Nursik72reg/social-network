export  const required =(value)=>{
    if(value){
        return undefined;
    }return "Error"
};

export const maxLenght = (maxLenght) =>
    (value)=>{
        if( value && value.length > maxLenght){
            return `Max lenght is ${maxLenght} symbols`
        }return undefined
    };
