import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ArrowIcon from '../../../../shared/assets/icons/arrow.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { theme } = useTheme();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.burgerSwitcher}>
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onToggle}
                    className={collapsed ? cls.burgerCollapsed : cls.burgerNotCollapsed}
                >
                    { theme === Theme.DARK
                        ? <ArrowIcon className={cls.ArrowIconDark} />
                        : <ArrowIcon className={cls.ArrowIconLight} />}
                </Button>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
