import './About.less';

export function About() {
    return (
        <div className={`about-wrapper`} id='about'>
            <div className={`about-container card`}>
            <h1>Family owned and operated</h1>
            <div className={`about-content`}>
                <p>     
                    Contact Wireless, LLC has been family owned and operated since 1981.
                    With nearly 50 years of experience, we've supported national carriers, 
                    regional ISPs, and small business owners with reliable tower space and communications solutions.
                </p>
                <span className={`great-rivers-header`}>Great Rivers Wireless, LLC</span>
                <p>
                    In 2012, we expanded our service by acquiring Great River Wireless, LLC, adding towers 
                    to our portfolio.
                </p>
            </div>
            </div>
        </div>
    )
}