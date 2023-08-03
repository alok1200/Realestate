import { useEffect, useState } from 'react';
import { termsAndConfitionData } from '../../DummyData';
import styles from './TermsAndConditions.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const TermsAndConditions = ({ setIsOpen }) => {
    const email = useSelector(s => s.user.user.email)
    console.log(email)
    const [isChecked, setisChecked] = useState(false)
    const handleSubmit = async () => {
        if(!isChecked) return
        try {
            const {data} = await axios.put("http://localhost:4000/property/mail/send", {email: email})
            setisChecked(false)
        } catch (error) {
            
        }
        setIsOpen(false)
    }

    useEffect(() => {
        console.log("inside terms and conditions")
    },[])
    console.log(isChecked)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                <h1 className={styles.title}>Terms and Conditions</h1>
                    {termsAndConfitionData.map((tac, i) => {
                        return <p key={i} className={styles.text}><strong>{`${++i}. ${tac.title} `}</strong>{tac.desc}</p>
                    })}
                    <div className={styles.check}><input type="checkbox" value={isChecked} onClick={() =>setisChecked(p => !p)}/><p>i agree to the <strong>DurgaState</strong> Terms and conditions</p></div>
                    <div className={styles.btnWrapper}>
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                        <button onClick={handleSubmit} className={`${!isChecked ? styles.disabled : ""}`}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions;
