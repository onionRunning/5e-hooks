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

#### useDebounce

***指定函数内触发***

```js
// run: 执行 cancel: 取消 fn 是你需要防抖的函数  options是触发条件
// 一般cancel 比较少去使用

...
const options = {
  isImmediate: true,       // 是否是立即执行
  delayTime: 1000          // 延迟 or 执行
}
const [run, cancel] = useDebounce(fn, options)
const [value, setValue] = useState('')

// 频繁触发的逻辑
const requestStorage = async () => {
  const res = await api.saveValue(params)
  ...  
}

const changeValue = (e: any) => {
  setValue(e.target.value)
  run(requestStorage)
}

<Input onChange={changeValue} value={value} />

...
```

#### useThrottle

#### useLocalStorage

#### useSessionStorage


### 公共常用函数库


#### isNumber

#### isString

#### isObject

#### formatTime 格式化时间


导出使用的时候按需加载
