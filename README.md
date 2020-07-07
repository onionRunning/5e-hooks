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

// ---> WillUnmount
```

#### useMount

```js
// 初始化逻辑
const initParams = () => {
  //xxxx
}

useMount(initParams) // 首次进入页面的时候执行一次, 无副作用, 内部禁止掉了

ps. 隔离副作用 hook ---> didMount

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

```
const [run] = useThrottle(fn, {delayTime: 1000})
```

#### useLocalStorage

#### useSessionStorage

```js
const [value, saveValue] = useSessionStorage('jb')
...
```
