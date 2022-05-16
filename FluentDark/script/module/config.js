/* 配置文件(可以被 data/widgets/custom.js 覆盖) */

import { merge } from '/appearance/themes/FluentDark/script/utils/misc.js';

export var config = {
    token: '', // API token, 无需填写
    theme: {
        typewriter: {
            // 打字机模式开关
            enable: true,
            switch: {
                enable: true, // 是否启用打字机模式开关
            },
        },
        hotkeys: {
            typewriter: {
                switch: {
                    // 打字机模式开关(Shift + Alt + T)
                    ctrlKey: false,
                    metaKey: false,
                    shiftKey: true,
                    altKey: true,
                    key: 'T',
                },
            },
        },
    },
};

try {
    let custom = await import('/widgets/custom.js');
    if (custom.config != null) {
        config = merge(config, custom.config);
    }
} catch (err) {
    console.log('custom.js not found, using default configuration.');
} finally {
    console.log(config);
}
