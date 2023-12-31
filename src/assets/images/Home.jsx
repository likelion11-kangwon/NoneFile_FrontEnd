import React from 'react';

import { main_color } from '../../styles/variables/colors';

function Home() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                d="M13.4261 8.97323H14.9126C15.9105 8.97323 16.3794 7.64223 15.6336 6.92679L8.72098 0.295816C8.3098 -0.0986053 7.6902 -0.0986053 7.27902 0.295816L0.366418 6.92679C-0.379402 7.64223 0.0895223 8.97323 1.0874 8.97323H2.57392V14.8289C2.57392 15.4757 3.05979 16 3.65914 16H12.3409C12.9402 16 13.4261 15.4757 13.4261 14.8289V8.97323Z"
                fill={main_color}
            />
        </svg>
    );
}

export default Home;
