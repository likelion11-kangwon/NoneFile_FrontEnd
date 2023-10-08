import React from 'react';
import '../styles/components/Status.scss';
import StatusFace from './StatusFace';

function Status({ None }) {
    return (
        <>
            {None === 'No' ? (
                <div className="property">
                    <div>
                        <StatusFace face="frown" />
                    </div>
                    <div>
                        <h3>
                            "앗! 아직 게시글이 없어요 : (이 카테고리의 첫 게글을
                            작성해봐요!"
                        </h3>
                    </div>
                </div>
            ) : (
                <div className="property_1">
                    <div>
                        <StatusFace face="smile" />
                    </div>
                    <div>
                        <span>
                            앗! 아직 게시글이 없어요: (이 카테고리의 첫 게시글을
                            작성해봐요!
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}

export default Status;
