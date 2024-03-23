import React from "react";

export const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
        'Backspace',
        'Delete',
        'Tab',
        'Escape',
        'Enter',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Home',
        'End',
    ];

    // Разрешаем: Ctrl+A, Command+A
    if (e.key === 'a' && (e.ctrlKey === true || e.metaKey === true)) {
        return;
    }

    // Разрешаем: backspace, delete, tab, escape, enter, стрелки, home, end
    if (allowedKeys.includes(e.key)) {
        return;
    }

    // Разрешаем: цифры на основной клавиатуре и на дополнительной (numpad)
    const isNumberKey =
        (e.key >= '0' && e.key <= '9') ||
        (e.key >= 'Numpad0' && e.key <= 'Numpad9');

    // Убеждаемся, что это число и останавливаем событие keypress, если это не так
    if (!isNumberKey && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
    }
};