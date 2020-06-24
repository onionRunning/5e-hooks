### 自定义hook库


#### useResetAction

***当页面离开时触发***

无返回值

```js
const resetState = () => {
    setAge(0)
    setValue({})
}

useResetAction(resetState)
```

#### useToggle

开关组件
```
```

#### useDebounce

***指定函数内触发***

```js
// time: 防抖间隔时间 funcWrapper: 包裹执行函数
const funcWrapper = useDebounce(time)

```

#### useThrottle

```js
// time: 节流间隔时间  funcWrapper: 包裹执行函数
const funcWrapper = useThrottle(time)

```

#### useLocalStorage

```js
// value: 返回储存的值 , saveValue: 执行save函数
const [value, saveValue] = useLocalStorage('key')

```

#### useSessionStorage

```js
// value: 返回储存的值 , saveValue: 执行save函数
const [value, saveValue] = useSessionStorage('key')

```


### 公共常用函数库


#### isNumber

#### isString

#### isObject

#### formatTime 格式化时间


导出使用的时候按需加载
