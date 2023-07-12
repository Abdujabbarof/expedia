import React, { useState } from 'react'
import styles from './form.module.scss'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import from from '../../images/from.svg'
import to from '../../images/to.svg'
import change from '../../images/change.svg'

const options = ['One-way', 'Return', 'Multi-city'];
const type = ['Econom class', 'Bussines class', 'First class'];

const Form = () => {
    const notify = (info, type) => toast[`${type}`](info, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });;

    const [select, setSelect] = useState('return')
    const [rotate, setRotate] = useState(0);
    const [inputs, setInputs] = useState([{id: 0}])

    const {register, handleSubmit, reset, formState: { errors }} = useForm()

    const rotateButton = () => {
        if(rotate === 0) {
            setRotate((rotate) => rotate + 180);
        } else {
            setRotate((rotate) => rotate - 180);
        }
    }

    const addInput = () => {
        setInputs([...inputs, {id: inputs.length + 1}])
    }

    const removeInput = (id) => {
        setInputs((inputs) => inputs.filter((input) => input.id !== id))
    }

    function handleSubmitForm(data) {
        if((data?.departing?.split('-')[0] > data?.returning?.split('-')[0] || data?.departing?.split('-')[1] > data?.returning?.split('-')[1] || data?.departing?.split('-')[2] > data?.returning?.split('-')[2]) && select !== 'one-way') {
            notify('Choose proper date!', 'error')
        }else {
            console.log("Form data", {...data, flightType: select});
            reset()
            notify('Submitted successfully', 'success')
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className={styles.wrapper}>
                <ul className={styles.inputs}>
                    {
                        options.map((item) => (
                            <li key={item}>
                                <label htmlFor={item.toLowerCase()}>
                                    <input type="radio" checked={select === item.toLowerCase()} onChange={() => setSelect(item.toLowerCase())} id={item.toLowerCase()} name='flight' value={item} />
                                    <span></span>
                                    {item}
                                </label>
                            </li>
                        ))
                    }
                </ul>

                <div className={styles.options}>
                    <div>
                        <select {...register("travellers", { required: true })} id="travellers">
                            <option value="1">1 traveller</option>
                            <option value="2">2 traveller</option>
                            <option value="3">3 traveller</option>
                            <option value="4">4 traveller</option>
                        </select>
                    </div>

                    <div>
                        <select id="classes" {...register("class", { required: true })}>
                            {
                                type.map((type) => (
                                    <option value={type.toLowerCase()} key={type.toLowerCase()}>{type}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            
            {
                select === 'multi-city' && <h2 className={styles.number}>Flight 1</h2>
            }

            <div className={styles.infos}>
                <div className={styles.left}>
                    <label className={styles.input}>
                        <img src={from} alt="from" />
                        <input type="text" {...register("from", { required: true })} placeholder='from' />
                    </label>

                    <span style={{transform: `rotate(${rotate}deg)`}} onClick={rotateButton}>
                        <img src={change} alt="" />
                    </span>

                    <label className={styles.input}>
                        <img src={to} alt="to" />
                        <input type="text" {...register("to", { required: true })} placeholder='to' />
                    </label>
                </div>

                <div className={styles.right}>
                    <label>
                        <input type="date" {...register("departing", { required: true })} />
                    </label>
                    {
                        select !== 'one-way' && <label>
                            <input type="date" {...register("returning", { required: true })} />
                        </label>
                    }
                </div>
            </div>

            {
                select === 'multi-city' && 
                <>
                    {
                        inputs?.map((input, index) => (
                            <>
                                <h2 className={styles.number}>Flight { index + 2 }</h2>
                                <Link className={styles.add} onClick={() => removeInput(input.id)}>Remove</Link>
                                <div className={styles.infos}>
                                    <div className={styles.left}>
                                        <label className={styles.input}>
                                            <img src={from} alt="from" />
                                            <input type="text" {...register(`from${index + 2}`, { required: true })} placeholder='from' />
                                        </label>

                                        <span>
                                            <img src={change} alt="" />
                                        </span>

                                        <label className={styles.input}>
                                            <img src={to} alt="to" />
                                            <input type="text" {...register(`to${index + 2}`, { required: true })} placeholder='to' />
                                        </label>
                                    </div>

                                    <div className={styles.right}>
                                        <label>
                                            <input type="date" {...register(`departing${index + 2}`, { required: true })} />
                                        </label>
                                        <label>
                                            <input type="date" {...register(`returning${index + 2}`, { required: true })} />
                                        </label>
                                    </div>
                                </div>
                            </>
                        ))
                    }

                    <Link className={styles.add} onClick={() => addInput()}>+ Add Another Flight</Link>
                </>
            }

            <button className={styles.btn} type='submit'>Search</button>
        </form>
    </>
  )
}

export default Form