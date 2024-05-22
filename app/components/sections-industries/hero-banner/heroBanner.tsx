import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Count {
    id: number;
    projectName: string;
    url: string;
}

interface Tag {
    id: number;
    nameLine: string;
    count: Count[]
}

interface IndustryHeroBanner {
    id: number;
    className: string,
    title: string;
    caption: string;
    urlVideo: string;
    tags: Tag[];
}

interface Props {
    data: IndustryHeroBanner[];
}

const HeroBanner = ({data}: Props) => {
    const videoUrl = data.map(i => i.urlVideo)[0];
    return (
        <section className={`${styles.heroBanner} hero-banner ${data.map(i => `hero-banner-${i.className}`).join(" ")}`}>
            <div className={styles.container}>
                <div className={styles.heroBanner_left}>
                    <h1 className={`${styles.heroBanner_title} h1 title-dark`}>{data.map(i => i.title)}</h1>
                    <div className={styles.heroBanner_bottomBlock}>
                        <p className={styles.heroBanner_text}>{data.map(i => i.caption)}</p>
                        <div className={styles.heroBanner_tags}>
                            {data.map((i, index) => (
                                i.tags?.map(tag => (
                                    <div key={tag.id} className={styles.heroBanner_tagItem}>
                                        <div className={styles.heroBanner_tagTitle}>{tag.nameLine}</div>
                                        {tag.count?.map(i => (
                                            <Link key={i.id} className={styles.heroBanner_tagLink}
                                                  href={i.url}>{i.projectName}</Link>
                                        ))}
                                    </div>
                                ))
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.heroBanner_right}>
                    <video
                        width="100%"
                        height="100%"
                        preload="none"
                        controls={false}
                        muted={true}
                        autoPlay={true}
                        loop={true}
                        playsInline
                    >
                        <source src={videoUrl}
                                type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    {/*<Image src={'/images/industries/topBanner.png'} alt={'topBanner'} height={692} width={708} />*/}
                </div>
            </div>
        </section>
    );
}
export default HeroBanner;