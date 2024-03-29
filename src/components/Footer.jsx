import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="footer__wrapper">
            <footer className="footer">
                <h1 className="footer__title">
                    <Link to="/">JUSTYNA ODEJ</Link>
                </h1>
                <ul className="footer__links">
                    <li>
                        <Link to="/">WORKS</Link>
                    </li>
                    <li>
                        <Link to="/Info">INFO</Link>
                    </li>
                </ul>
                <ul className="footer__socials">
                    <li>
                        <a href="https://www.instagram.com/odej.art/?igshid=NTc4MTIwNjQ2YQ%3D%3D&fbclid=IwAR2A-kk4yqDZJ62RpgXIksr0NObnb6e8RKbFcXHocHhJD6_ajr5QDzR2BIM">
                            <div className="link">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M16.1233 20H3.87667C2.85162 19.9909 1.87112 19.5797 1.14612 18.855C0.421126 18.1304 0.00956815 17.15 0 16.125L0 3.87833C0.000774774 3.36992 0.102371 2.86671 0.298909 2.39782C0.495448 1.92893 0.783025 1.50368 1.145 1.14667C1.50199 0.784539 1.9272 0.496751 2.39607 0.299935C2.86494 0.103119 3.36817 0.00117641 3.87667 0L16.1233 0C17.1488 0.00956822 18.1296 0.421302 18.8546 1.14661C19.5796 1.87192 19.9909 2.85285 20 3.87833V16.125C19.9909 17.1502 19.5794 18.1307 18.8543 18.8555C18.1293 19.5803 17.1485 19.9913 16.1233 20ZM2.01 8.075V16.195C2.01648 16.7026 2.22102 17.1877 2.58001 17.5467C2.93899 17.9056 3.42402 18.1102 3.93167 18.1167H16.0683C16.5754 18.1098 17.0598 17.9053 17.4183 17.5467C17.7769 17.1881 17.9814 16.7037 17.9883 16.1967V8.075H15.02C15.2759 8.70961 15.3947 9.39122 15.3683 10.075C15.3683 11.5116 14.7977 12.8893 13.7818 13.9052C12.766 14.921 11.3883 15.4917 9.95167 15.4917C8.51508 15.4917 7.13733 14.921 6.1215 13.9052C5.10568 12.8893 4.535 11.5116 4.535 10.075C4.5457 9.38588 4.69417 8.70587 4.97167 8.075H2.01ZM10.0433 6.465C9.49327 6.47324 8.95304 6.61201 8.46711 6.8699C7.98118 7.12779 7.56346 7.49741 7.24833 7.94833C6.92722 8.3933 6.71615 8.90804 6.63244 9.45035C6.54873 9.99266 6.59477 10.5471 6.76678 11.0682C6.93878 11.5892 7.23185 12.0621 7.62196 12.448C8.01206 12.8339 8.48809 13.1219 9.011 13.2882C9.53391 13.4546 10.0888 13.4946 10.6302 13.405C11.1715 13.3155 11.684 13.0988 12.1254 12.7729C12.5669 12.447 12.9248 12.0211 13.1698 11.5301C13.4149 11.0391 13.54 10.497 13.535 9.94833C13.5412 9.22085 13.2943 8.51384 12.8367 7.94833C12.5217 7.49764 12.1042 7.12815 11.6186 6.87028C11.133 6.6124 10.5931 6.4735 10.0433 6.465ZM14.2933 2.38833V5.70667H17.6117V2.38833H14.2933Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://linktr.ee/justynaodej">
                            <div className="link">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                                    <path
                                        d="M10.4471 4.8775L13.7846 1.44667L15.7221 3.43L12.2221 6.7675H17.1455V9.52167H12.198L15.7221 12.945L13.7846 14.89L9.0013 10.0825L4.21714 14.89L2.27964 12.9525L5.8038 9.52917H0.855469V6.7675H5.77964L2.27964 3.43083L4.2163 1.44667L7.5538 4.8775V0H10.4471V4.8775ZM7.5538 13.4658H10.4471V20H7.5538V13.4658Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </a>
                    </li>
                </ul>
                <p className="copyright">
                    ©2023 <span>odej.studio</span> all right reserved.
                </p>
            </footer>
        </div>
    );
};
