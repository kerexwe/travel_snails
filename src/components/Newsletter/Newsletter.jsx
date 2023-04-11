import React from 'react';
import s from './Newsletter.module.scss'
import next from '../../assets/images/next.svg'

function Newsletter(props) {
    return (
        <div className={s.wrapper}>
            {/* <div className='container'> */}
                <div className={s.title}>
                    <h1>Newsletter</h1>
                    <p>Sign up now to receive hot special offers <br />
                        and information about the best tours! </p>
                    <div>
                        <input type="text" />
                        <button><img src={next} alt="" /></button>
                    </div>
                </div>
            </div>
        //  </div>
    );
}

export default Newsletter;