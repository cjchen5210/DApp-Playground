// pick的解释
// 举个例子：
// const person = {  
//   name: "John",  
//   age: 30,  
//   city: "New York",  
// };  
  
// const picked = pick(person, ["name", "age"]);  
  
// console.log(picked); // 输出: { name: "John", age: 30 }  
 
// 在这个例子中，我们使用 pick 函数从 person 对象中提取 name 和 age 属性，
// 并将结果存储在 picked 变量中。picked 对象仅包含 name 和 age 属性。

export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
    return keys.reduce(
        (acc, key) => {
            if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
                acc[key] = obj[key]
            }
            return acc
        },
        {} as Pick<T, K>,
    )
}