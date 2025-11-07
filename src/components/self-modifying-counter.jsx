import React, { useState } from 'react';

// 初始的组件渲染函数
const initialRenderFunction = (props) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [invert, setInvert] = useState(false);

  const handleIncrement = () => {
    const newStep = invert ? -step : step;
    setCount(prev => prev + newStep);
    // 随机修改逻辑
    const random = Math.random();
    if (random < 0.33) {
      // 增加步长
      props.setRenderFunction(createRenderFunction(step + 1, invert));
    } else if (random < 0.66) {
      // 反转增减
      props.setRenderFunction(createRenderFunction(step, !invert));
    } else {
      // 同时修改步长和反转
      props.setRenderFunction(createRenderFunction(step + 2, !invert));
    }
  };

  const handleDecrement = () => {
    const newStep = invert ? step : -step;
    setCount(prev => prev + newStep);
    // 随机修改逻辑
    const random = Math.random();
    if (random < 0.33) {
      // 增加步长
      props.setRenderFunction(createRenderFunction(step + 1, invert));
    } else if (random < 0.66) {
      // 反转增减
      props.setRenderFunction(createRenderFunction(step, !invert));
    } else {
      // 同时修改步长和反转
      props.setRenderFunction(createRenderFunction(step + 2, !invert));
    }
  };

  const handleReset = () => {
    setCount(0);
    // 随机修改逻辑
    const random = Math.random();
    if (random < 0.33) {
      // 增加步长
      props.setRenderFunction(createRenderFunction(step + 1, invert));
    } else if (random < 0.66) {
      // 反转增减
      props.setRenderFunction(createRenderFunction(step, !invert));
    } else {
      // 同时修改步长和反转
      props.setRenderFunction(createRenderFunction(step + 2, !invert));
    }
  };

  return (
    <div>
      <h2>自我修改的计数器</h2>
      <div>计数：{count}</div>
      <div>当前步长：{step}</div>
      <div>增减是否反转：{invert ? '是' : '否'}</div>
      <button onClick={handleIncrement}>增加</button>
      <button onClick={handleDecrement}>减少</button>
      <button onClick={handleReset}>重置</button>
      <div>
        <h3>当前组件逻辑</h3>
        <pre>{createRenderFunction(step, invert).toString()}</pre>
      </div>
    </div>
  );
};

// 创建新的渲染函数
const createRenderFunction = (step, invert) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      const newStep = invert ? -step : step;
      setCount(prev => prev + newStep);
      // 随机修改逻辑
      const random = Math.random();
      if (random < 0.33) {
        // 增加步长
        props.setRenderFunction(createRenderFunction(step + 1, invert));
      } else if (random < 0.66) {
        // 反转增减
        props.setRenderFunction(createRenderFunction(step, !invert));
      } else {
        // 同时修改步长和反转
        props.setRenderFunction(createRenderFunction(step + 2, !invert));
      }
    };

    const handleDecrement = () => {
      const newStep = invert ? step : -step;
      setCount(prev => prev + newStep);
      // 随机修改逻辑
      const random = Math.random();
      if (random < 0.33) {
        // 增加步长
        props.setRenderFunction(createRenderFunction(step + 1, invert));
      } else if (random < 0.66) {
        // 反转增减
        props.setRenderFunction(createRenderFunction(step, !invert));
      } else {
        // 同时修改步长和反转
        props.setRenderFunction(createRenderFunction(step + 2, !invert));
      }
    };

    const handleReset = () => {
      setCount(0);
      // 随机修改逻辑
      const random = Math.random();
      if (random < 0.33) {
        // 增加步长
        props.setRenderFunction(createRenderFunction(step + 1, invert));
      } else if (random < 0.66) {
        // 反转增减
        props.setRenderFunction(createRenderFunction(step, !invert));
      } else {
        // 同时修改步长和反转
        props.setRenderFunction(createRenderFunction(step + 2, !invert));
      }
    };

    return (
      <div>
        <h2>自我修改的计数器</h2>
        <div>计数：{count}</div>
        <div>当前步长：{step}</div>
        <div>增减是否反转：{invert ? '是' : '否'}</div>
        <button onClick={handleIncrement}>增加</button>
        <button onClick={handleDecrement}>减少</button>
        <button onClick={handleReset}>重置</button>
        <div>
          <h3>当前组件逻辑</h3>
          <pre>{createRenderFunction(step, invert).toString()}</pre>
        </div>
      </div>
    );
  };
};

const SelfModifyingCounter = () => {
  // 存储当前的渲染函数
  const [RenderFunction, setRenderFunction] = useState(initialRenderFunction);

  return <RenderFunction setRenderFunction={setRenderFunction} />;
};

export default SelfModifyingCounter;