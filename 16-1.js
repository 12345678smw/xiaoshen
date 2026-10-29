/* =========================================================
   100 个盒子 · 7 的规则 + 文字查询 —— 16-1.js
   学号：24001010108   姓名：沈明伟
   ========================================================= */
(function () {
    'use strict';

    var smw_min = 1;
    var smw_max = 100;

    /* 函数7：判断数字是否命中规则（7 的倍数，或末尾是 7） */
    function smw_isRule7(smw_num) {
        return smw_num % 7 === 0 || smw_num % 10 === 7;
    }

    var smw_grid = document.querySelector('.smw_grid');
    var smw_statEmpty = document.querySelector('.smw_stat_empty');
    var smw_statFilled = document.querySelector('.smw_stat_filled');
    var smw_form = document.querySelector('.smw_query');
    var smw_input = document.querySelector('.smw_query_input');
    var smw_result = document.querySelector('.smw_query_result');

    var smw_boxes = [];
    var smw_emptyCount = 0;
    var smw_hitTimer = 0;

    /* ---------- 生成 100 个盒子 ---------- */
    for (var smw_num = smw_min; smw_num <= smw_max; smw_num++) {
        var smw_box = document.createElement('div');
        smw_box.className = 'smw_box';
        smw_box.setAttribute('data-num', smw_num);

        if (smw_isRule7(smw_num)) {
            /* 命中规则：空盒子，内部不放任何文字 */
            smw_box.classList.add('smw_box_empty');
            smw_emptyCount++;
        } else {
            /* 不命中规则：盒子内部显示数字 */
            smw_box.textContent = smw_num;
        }

        smw_grid.appendChild(smw_box);
        smw_boxes.push(smw_box);
    }

    smw_statEmpty.textContent = smw_emptyCount;
    smw_statFilled.textContent = (smw_max - smw_min + 1) - smw_emptyCount;

    /* ---------- 文字查询 ---------- */
    smw_form.addEventListener('submit', function (smw_event) {
        smw_event.preventDefault();

        /* 先清掉上一次的高亮 */
        if (smw_hitTimer) {
            window.clearTimeout(smw_hitTimer);
            smw_hitTimer = 0;
        }
        for (var smw_j = 0; smw_j < smw_boxes.length; smw_j++) {
            smw_boxes[smw_j].classList.remove('smw_box_hit');
        }

        var smw_text = smw_input.value.trim();
        var smw_value = Number(smw_text);

        if (!smw_text || !Number.isInteger(smw_value) || smw_value < smw_min || smw_value > smw_max) {
            smw_result.className = 'smw_query_result';
            smw_result.textContent = '请输入 1–100 之间的整数。';
            return;
        }

        var smw_hit = smw_isRule7(smw_value);

        if (smw_hit) {
            smw_result.className = 'smw_query_result smw_query_result_empty';
            smw_result.textContent = '数字 ' + smw_value + ' 命中规则（7 的倍数或末尾是 7），输出空盒子。';
        } else {
            smw_result.className = 'smw_query_result smw_query_result_num';
            smw_result.textContent = '数字 ' + smw_value + ' 不命中规则，盒子内部显示数字 ' + smw_value + '。';
        }

        /* 高亮对应的盒子，1.8 秒后自动取消 */
        var smw_target = smw_boxes[smw_value - smw_min];
        smw_target.classList.add('smw_box_hit');

        smw_hitTimer = window.setTimeout(function () {
            smw_target.classList.remove('smw_box_hit');
            smw_hitTimer = 0;
        }, 1800);
    });
})();
