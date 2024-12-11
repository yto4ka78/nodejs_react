import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./dashboard.module.scss";

const Dashboard = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        composition: "",
        photo: [],
    });
    const [previewPhotos, setPreviewPhotos] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        console.log(files);
        setFormData({ ...formData, photo: [...formData.photo, ...files] });

        const urls = Array.from(files).map((file) => URL.createObjectURL(file));
        setPreviewPhotos([...previewPhotos, ...urls]);
    };

    const removePhoto = (urlToRemove) => {
        const indexToRemove = previewPhotos.indexOf(urlToRemove);
        setPreviewPhotos((prev) => prev.filter((url) => url !== urlToRemove));

        setFormData((prev) => ({
            ...prev,
            photo: prev.photo.filter((_, index) => index !== indexToRemove),
        }));

         URL.revokeObjectURL(urlToRemove);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("price", formData.price);
        data.append("composition", formData.composition);
        if (formData.photo) {
            Array.from(formData.photo).forEach((file) => {
                data.append("photo", file);
            });
        }

        try {
            const response = await axios.post("/api/bouquet/create", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Букет добавлен успешно!");
        } catch (error) {
            console.error("Ошибка добавления букета:", error);
            alert("Ошибка при добавлении букета");
        }
    };

    return (
        <div className={styles.createBouquet_main}>
            <div className={styles.createBouquet_main_error}>
                {errorMessage}
            </div>
            <form
                className={styles.createBouquet_main_form}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Название букета</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="description">Описание</label>
                <textarea
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                />
                <label htmlFor="price">Цена</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    value={formData.price}
                    onChange={handleChange}
                />
                <label htmlFor="composition">Композиция</label>
                <input
                    id="composition"
                    name="composition"
                    type="text"
                    value={formData.composition}
                    onChange={handleChange}
                />
                <label htmlFor="photo">Загрузить фото</label>
                <input
                    id="photo"
                    name="photo"
                    type="file"
                    onChange={handleFileChange}
                    multiple
                />
                <div className={styles.div_preview}>
                    {previewPhotos.map((url, index) => (
                        <div key={index} className={styles.preview}>
                            <button
                                type="button"
                                onClick={() => removePhoto(url)}
                            >
                                ✖
                            </button>
                            <img src={url} alt={`Preview ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default Dashboard;
