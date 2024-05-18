"use client";
import styles from "./style.module.scss";
import { useState, ChangeEvent, FormEvent, useRef, MouseEvent } from 'react';
import Btn from "@/app/components/btn/btn";
import Image from "next/image";

interface FormData {
    name: string;
    email: string;
    message: string;
    attachment: File | null;
}

export default function ContactForm() {
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        hiddenFileInput.current?.click();
    };

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        attachment: null,
    });

    const [fileName, setFileName] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({
                ...formData,
                attachment: e.target.files[0],
            });
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('email', formData.email);
        formDataObj.append('message', formData.message);
        if (formData.attachment) {
            formDataObj.append('attachment', formData.attachment);
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formDataObj,
        });

        if (response.ok) {
            alert('Your message has been sent!');
        } else {
            alert('There was an error sending your message.');
        }
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Text message"
                rows={1}
            />
            <div>
                <button type="button" className={styles.contactForm_uploadFile} onClick={handleClick}>
                    {fileName ?
                        (<Image src={'/images/file.svg'} alt={'attached'} width={32} height={32} />)
                        :
                        (<><Image src={'/images/noun-attach.svg'} alt={'noun-attach'} width={32} height={32}/> Attach file</>)
                    }
                </button>
                <input
                    ref={hiddenFileInput}
                    className={styles.file}
                    type="file"
                    name="attachment"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />
            </div>
            <Btn name={'Send'} color={'#13141F'} white={true} fontSize={'font-32px'} type={'submit'} url={''} />
        </form>
    );
}
