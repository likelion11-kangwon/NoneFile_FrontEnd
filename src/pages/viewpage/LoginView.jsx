import React from 'react';
import '../../styles/viewpage/LoginView.scss';
import { ReactComponent as BackGround } from '../../assets/images/Group 30.svg';
import { ReactComponent as Googlee } from '../../assets/images/google.svg';
import { ReactComponent as Gite } from '../../assets/images/git.svg';

function LoginView() {
    return (
        <article>
            <div className="main">
                <div className="Group30">
                    <BackGround />
                </div>
                <div className="Frame81">
                    <div className="Frame4">
                        <p>Service Name</p>
                        <div className="Frame21">
                            <div className="google_bet">
                                <div className="googlee">
                                    <Googlee />
                                </div>
                                <p>Google</p>
                            </div>
                            <div className="git_bet">
                                <div className="gite">
                                    <Gite />
                                </div>
                                <p>github</p>
                            </div>
                        </div>
                    </div>
                    <p>
                        개발자들을 위한 커뮤니티, 서로 소통하고 함께
                        성장해보세요.
                    </p>
                </div>
            </div>
        </article>
    );
}

export default LoginView;
