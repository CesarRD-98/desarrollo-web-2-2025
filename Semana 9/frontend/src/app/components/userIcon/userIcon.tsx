'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/components/userIcon.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useLoginContext } from '@/app/providers/loginProvider';


export default function UserIcon() {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { user, logout } = useLoginContext()

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
                console.log("Click fuera de menu");
            }
        }

        if (showMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showMenu]);

    return (
        <div className={styles.container} ref={menuRef}>
            <div className={styles.iconContainer} onClick={() => setShowMenu(!showMenu)}>
                <label style={{fontSize: 14, fontWeight: 'bold', cursor: 'pointer', marginRight: 10 }}>{user?.email}</label> 
                <FontAwesomeIcon icon={faCircleUser} size="xl" />
            </div>

            {showMenu && (
                <div className={styles.menu}>
                    <h4>Menú</h4>
                    <ul className={styles.ul}>
                        <li style={{cursor: 'text'}}><strong>Role:</strong> {user?.role}</li>
                        <li onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} /> Cerrar sesión</li>
                    </ul>
                </div>
            )}
        </div>
    )
}
