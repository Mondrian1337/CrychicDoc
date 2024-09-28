import {
    DefaultTheme,
    UserConfig,
    HeadConfig,
    TransformContext,
} from "vitepress";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { TDesignResolver } from "unplugin-vue-components/resolvers";
import {
    groupIconVitePlugin,
    localIconLoader,
} from "vitepress-plugin-group-icons";
import {
    GitChangelog,
    GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";
import * as config from "./markdown-plugins";

import { search as zhSearch } from "./lang/zh";

function generateAvatarUrl(username: string) {
    return `https://github.com/${username}.png`;
}

export const commonConfig: UserConfig<DefaultTheme.Config> = {
    srcDir: "./docs",
    rewrites: {
        "02_AABB.md": "AABB.md",
    },
    themeConfig: {
        logo: {
            alt: "CryChicDoc",
            light: "/logo.png",
            dark: "/logodark.png",
        },
        search: {
            provider: "algolia",
            options: {
                appId: "ATKJZ0G8V5",
                apiKey: "f75b80326d9a5599254436f088bcb548",
                indexName: "mihono",
                locales: {
                    ...zhSearch,
                },
            },
        },
        socialLinks: [
            // {
            //     icon: {
            //         svg: '<svg t="1726836997294" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15518" width="256" height="256"><path d="M930.37056 641.18784a363.8272 363.8272 0 0 0-86.89152-174.40256 156.65664 156.65664 0 0 0-31.23712-112.54272c-8.35072-129.40288-66.304-201.6512-113.9712-239.63648a299.38688 299.38688 0 0 0-182.8352-64.26112h-11.00288a303.55456 303.55456 0 0 0-184.61184 64.4352c-48.01536 37.98528-106.50624 110.32064-114.66752 239.63648a157.79328 157.79328 0 0 0-31.06304 112.36352 364.51328 364.51328 0 0 0-86.0928 172.09344l-0.79872 4.08576v4.16768c-3.10784 74.11712 14.90944 117.68832 53.248 129.49504l13.1328 3.9936 13.4912-2.4832a104.38144 104.38144 0 0 0 40.82688-18.2784l1.95584 3.28192a124.2624 124.2624 0 0 0-43.3152 100.82304v1.24416a93.2352 93.2352 0 0 0 29.91104 62.1312l2.6624 2.39104 2.92864 2.048a232.8064 232.8064 0 0 0 163.84 39.84896 279.28064 279.28064 0 0 0 142.00832-48.19456 291.34336 291.34336 0 0 0 146.80064 48.10752h15.08864c6.48192 0.61952 13.04576 0.88576 19.43552 0.88576a212.12672 212.12672 0 0 0 126.39232-41.35936l2.22208-1.59744 2.03264-1.86368a94.60224 94.60224 0 0 0 30.80192-62.57152v-1.3312a125.056 125.056 0 0 0-42.69056-100.74112l1.68448-2.92864a96.8704 96.8704 0 0 0 46.23872 18.10432l13.40416 1.68448 12.60544-4.87936c64.09216-24.48896 59.8272-74.98752 48.46592-133.74976z m-67.80416 84.49536a43.7504 43.7504 0 0 1-34.08384-24.76032l-28.48768-38.60992-21.03296 42.9568a468.85888 468.85888 0 0 1-27.68896 48.64l-16.68608 25.6512 26.624 15.08864a70.99392 70.99392 0 0 1 36.47488 66.03264 41.58464 41.58464 0 0 1-13.4912 27.42272 160.3072 160.3072 0 0 1-111.73888 30.17728h-15.08352a238.55616 238.55616 0 0 1-126.03392-43.58144l-8.87296-8.87296h-30.44352l-8.87296 8.87296a226.85696 226.85696 0 0 1-122.30144 43.136 179.5328 179.5328 0 0 1-128.34304-30.4384 40.192 40.192 0 0 1-12.86656-26.624 71.9616 71.9616 0 0 1 36.74624-66.47808l26.624-15.08352-16.77312-25.74336a480.15872 480.15872 0 0 1-27.69408-48.63488l-19.43552-40.2944-28.3136 35.50208a51.01056 51.01056 0 0 1-34.61632 26.00448c-7.72096-2.39104-17.75104-24.04864-15.9744-76.32896A311.8848 311.8848 0 0 1 221.056 494.1312l8.87296-8.87808-1.24416-12.86656A105.25696 105.25696 0 0 1 248.832 384.69632l8.34048-7.99232 0.53248-11.44832C267.82208 157.47584 419.328 103.6032 504.44288 103.6032h11.00288c83.43552 0 234.22976 53.25312 244.08064 261.65248l0.53248 11.62752 8.86784 7.9872a104.23296 104.23296 0 0 1 20.15232 87.51616l-1.23904 12.86656 8.87296 9.3184a311.83872 311.83872 0 0 1 81.46944 156.83072c12.25216 63.63136 4.5312 66.47296-15.616 74.28096z" p-id="15519" fill="#9cca86"></path><path d="M365.09696 700.0576c-15.02208 0-31.75936-2.57536-51.16416-7.87456l-0.49664-0.14336c-11.01824-3.67104-20.74112-8.1664-28.928-13.38368l-0.56832-0.37888c-7.54176-5.27872-14.03392-12.29824-19.09248-20.73088-3.46624-6.06208-5.0944-11.76064-6.528-16.78848l-0.14336-0.56832c-1.50528-6.76352-2.29888-14.38208-2.29888-22.04672 0-1.82272 0.1536-3.8144 0.3328-5.97504 0.19456-2.26304 0.34816-4.21376 0.34816-6.31296v-0.73216l0.1024-0.72192c0.28672-1.98656 0.43008-4.10624 0.56832-6.2976l0.04608-0.73728c0.16384-2.59072 0.34304-5.24288 0.65536-7.90528l0.0512-0.53248c0.70656-11.00288 2.05824-23.84384 3.41504-36.08576 2.7392-23.99232 5.4784-45.2096 5.4784-45.2352l1.28-9.93792 50.32448 5.38624-12.66176 12.70272-0.39936 3.5584a50.01216 50.01216 0 0 1-0.44544 3.09248l-0.10752 0.72704c-0.18432 1.70496-0.36864 3.61472-0.56832 5.69344-0.51712 5.31968-1.13152 11.68384-2.06336 18.70336l-0.90624 8.65792c-1.8432 17.6128-3.93728 37.58592-4.51072 50.7904l-0.0256 0.62976-0.1024 0.61952c-0.54272 3.24608-0.54272 6.7072-0.54272 9.23136 0 5.6832 0.5376 10.34752 1.65376 14.24384 1.01376 3.5328 2.31424 5.95456 4.21888 7.8592 2.27328 2.26816 4.10112 4.0192 6.24128 5.2992 4.3008 2.45248 10.02496 4.88448 16.75264 7.14752 13.77792 4.11648 28.26752 6.41024 40.0896 6.41024 5.72928 0 9.71776-0.07168 12.87168-0.96768 1.6384-0.47104 2.80064-0.85504 3.61984-1.152l6.33856-2.2784 0.41984-6.72256c2.03264-32.6656 3.3792-83.0464 3.3792-94.6944v-13.32224l40.96 1.37216v9.9072c0 0.65024-0.00512 16.11776-0.6912 35.85024l-0.31232 9.2672c-0.5888 17.80736-1.2544 37.71904-2.39104 53.95456l-0.0256 0.56832c-0.0768 5.29408-1.03424 10.3936-2.77504 14.75072-1.46944 3.67104-3.13344 7.82336-5.82656 11.54048-4.9408 7.26016-11.4944 12.69248-19.64544 16.38912a52.45952 52.45952 0 0 1-15.34976 4.92544l-0.57856 0.10752a95.50336 95.50336 0 0 1-19.99872 2.14016zM420.93568 217.8304c-23.66464 0-42.05568 27.60192-42.05568 63.08864s18.39616 63.08864 42.05568 63.08864 42.0608-27.60192 42.0608-63.08864-18.40128-63.08864-42.0608-63.08864zM599.60832 279.32672c2.62656-3.9424 3.94752-6.56896 6.56384-7.8848 1.31584-1.31072 2.6368-1.31072 5.26336-1.31072 1.32096 0 2.62656 0 5.25312 1.31072 2.63168 2.62656 6.57408 6.56896 9.19552 14.45888 2.6368 7.8848 3.94752 17.08544 3.94752 27.5968h32.86528c0-21.02784-3.94752-40.74496-13.14816-56.51456-3.94752-7.8848-9.20064-14.45888-15.7696-19.71712-6.57408-5.25824-14.45376-7.8848-22.33856-7.8848s-15.77984 2.62656-22.34368 7.8848c-9.20064 7.88992-17.08544 18.40128-21.03296 31.54432-5.25312 13.13792-7.87968 27.60192-7.87968 43.37152h32.86528c-1.32608-13.13792 1.30048-24.96512 6.55872-32.85504z" p-id="15520" fill="#9cca86"></path><path d="M533.72416 588.11904c-44.39552 0-91.87328-5.56032-137.31328-16.08704-41.92768-9.70752-82.35008-23.01952-113.8176-37.48352-31.98464-14.50496-57.09312-34.65216-74.69568-59.90912a130.60608 130.60608 0 0 1-15.616-28.09344c-3.48672-8.52992-5.38112-15.28832-5.94944-18.48832l-0.13824-0.7936-0.27136-0.768c-0.14848-0.41472-0.16384-0.46592-0.16384-2.21696 0-1.4336 0.47104-3.75808 0.89088-4.95616l0.21504-0.60416 0.13312-0.62464c0.47104-2.23232 1.2032-3.44576 1.42336-3.69664l1.24928-1.17248 0.73728-1.4336 0.86016-0.75264 4.50048-4.23936 1.37216-6.4512 1.53088-7.46496a187.50976 187.50976 0 0 0 24.51968 33.31072c24.18176 27.84256 56.7296 50.62144 96.55808 67.50208 49.50528 20.98176 110.03392 31.62112 179.90144 31.62112h10.87488c66.91328-1.32608 123.84768-11.00288 169.44128-28.76928 30.14144-10.96704 57.05216-25.79456 79.73888-43.99104 31.92832-24.9344 49.99168-50.57024 59.66848-68.26496 0.82944 1.50016 1.62816 3.0464 2.40128 4.63872 5.74464 12.1856 8.43776 23.65952 8.43776 36.03456 0 7.1424-1.03936 14.8992-3.37408 25.1648-0.65024 3.59424-4.77696 10.57792-6.12864 12.87168-5.6064 9.3952-16.12288 20.77184-30.39232 32.86528-21.88288 19.23584-50.14016 37.56544-81.84832 53.14048-34.01216 16.72192-69.03808 28.09344-104.11008 33.81248-20.29056 3.56864-43.35104 5.2992-70.63552 5.2992z" p-id="15521" fill="#9cca86"></path></svg>',
            //     },
            //     link: "https://qm.qq.com/q/CsR20JGLAc",
            // },
            // {
            //     icon: {
            //         svg: '<svg t="1726837363823" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16717" width="200" height="200"><path d="M593.664 622.08a383.914667 383.914667 0 0 1-20.650667 4.437333 301.226667 301.226667 0 0 1-113.664-0.426666c-6.570667-1.28-15.872-3.541333-27.861333-6.741334l-39.296 51.072c-96.981333-3.114667-133.845333-68.096-133.845333-68.096 0-144.256 63.189333-261.205333 63.189333-261.205333 63.189333-48.341333 123.306667-47.018667 123.306667-47.018667l17.194666 22.4a47.786667 47.786667 0 0 1 4.778667-0.426666 363.818667 363.818667 0 0 1 98.730667 0.426666l18.858666-22.4s60.16-1.322667 123.306667 47.061334c0 0 63.232 116.906667 63.232 261.162666 0 0-37.333333 64.938667-134.314667 68.096l-42.965333-48.384zM429.909333 469.333333C404.266667 469.333333 384 488.533333 384 512s20.693333 42.666667 45.909333 42.666667c25.6 0 45.866667-19.2 45.866667-42.666667 0.426667-23.466667-20.224-42.666667-45.866667-42.666667z m164.181334 0c-25.6 0-45.866667 19.2-45.866667 42.666667s20.693333 42.666667 45.866667 42.666667c25.642667 0 45.909333-19.2 45.909333-42.666667s-20.266667-42.666667-45.909333-42.666667zM896 981.333333l-212.906667-213.333333H810.666667V170.666667H213.333333v597.333333h469.461334l24.32 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334h597.333334a85.333333 85.333333 0 0 1 85.333333 85.333334v810.666666z" p-id="16718" fill="#9cca86"></path></svg>',
            //     },
            //     link: "https://discord.gg/uPJHxU46td",
            // },
            {
                icon: "github",
                link: "https://github.com/CrychicTeam/CrychicDoc",
            },
            {
                icon: {
                    svg: '<svg t="1726513713225" viewBox="65 35 950 950" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4974" width="2000" height="2000"><path d="M512 960c-246.4 0-448-201.6-448-448s201.6-448 448-448 448 201.6 448 448-201.6 448-448 448z" fill="#D81E06" p-id="4975"></path><path d="M721.664 467.968h-235.52a22.272 22.272 0 0 0-20.736 20.736v51.776c0 10.368 10.368 20.736 20.736 20.736H628.48c10.368 0 20.736 10.304 20.736 20.672v10.368c0 33.664-28.48 62.08-62.144 62.08H392.896a22.272 22.272 0 0 1-20.672-20.672V436.928c0-33.664 28.48-62.08 62.08-62.08h287.36a22.272 22.272 0 0 0 20.736-20.736v-51.84a22.272 22.272 0 0 0-20.736-20.672h-287.36A152.96 152.96 0 0 0 281.6 434.368v287.36c0 10.304 10.368 20.672 20.736 20.672h302.848c75.072 0 137.216-62.08 137.216-137.216v-116.48a22.272 22.272 0 0 0-20.736-20.736z" fill="#FFFFFF" p-id="4976"></path></svg>',
                },
                link: "https://gitee.com/CrychicTeam/CrychicDoc",
            },
            {
                icon: {
                    svg: '<svg width="128" height="128" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><g><path id="svg_1" d="m0.22811,8.42244l0,-2.67626c0,-0.13022 0.00485,-0.25928 0.01372,-0.38725l-0.01372,3.06353l0,0l0,-0.00002zm22.13572,-6.35785c0.87539,0.97663 1.40807,2.26682 1.40807,3.68159l0,12.50765c0,3.04754 -2.47054,5.51808 -5.51808,5.51808l-12.50765,0c-1.52088,0 -2.89798,-0.61536 -3.89611,-1.61059l20.51375,-20.09673l0,0l0.00002,0z" fill="rgb(88, 182, 216)" fill-rule="evenodd" stroke="null"/><path id="svg_2" d="m1.88786,22.19821c-1.02398,-1.00178 -1.65975,-2.39874 -1.65975,-3.94439l0,-12.50765c0,-3.04754 2.47054,-5.51808 5.51808,-5.51808l12.50765,0c1.66068,0 3.14985,0.7337 4.16147,1.89447l-20.52744,20.07565l-0.00001,0z" fill="rgb(134, 193, 85)" fill-rule="evenodd" stroke="null"/><path id="svg_3" d="m19.6569,9.39041l-2.886,0c-0.94354,0.19393 -0.81466,1.06567 -0.81466,1.06567l0,3.24521c0.10339,0.93088 1.00853,0.79334 1.00853,0.79334l4.57694,0l0,1.90834l-5.01086,0c-1.95265,-0.10849 -2.36748,-1.44849 -2.36748,-1.44849c-0.19389,-0.43958 -0.1609,-0.87369 -0.1609,-0.87369l0,-3.56376c0.01292,-2.52116 1.7239,-2.874 1.7239,-2.874c0.29728,-0.10345 1.24123,-0.13795 1.24123,-0.13795l4.62009,0l-1.93077,1.88535l0,0l-0.00002,-0.00002zm-8.4846,0.36788l-2.29919,6.5757l-2.09227,0l-2.43714,-6.5757l-0.02299,6.55271l-1.90834,0l0,-8.80594l3.10391,0l2.25321,6.02391l2.23022,-6.02391l3.17291,0l0,8.85193l-2.00031,0l0,-6.59869l0,0l-0.00001,-0.00001z" fill="rgb(255, 255, 255)" fill-rule="evenodd" stroke="null"/></svg>',
                },
                link: "https://www.mcmod.cn/author/32860.html",
            },
        ],
        langMenuLabel: "Change Language",
        lastUpdated: {},
        // 添加以下配置来启用多语言支持
        //@ts-ignore
        locales: {
            root: { label: "简体中文", lang: "zh-CN" },
            "en-US": { label: "English", lang: "en-US" },
        },
    },
    markdown: { ...config.markdown },
    cleanUrls: true,
    mermaid: {
        startOnLoad: true,
        securityLevel: "loose",
        theme: "default",
    },
    vue: {
        template: {
            compilerOptions: {
                whitespace: "preserve",
            },
        },
    },
    vite: {
        optimizeDeps: {
            exclude: ["@nolebase/*"],
        },
        ssr: {
            noExternal: ["vuetify", "@nolebase/*"],
        },
        plugins: [
            GitChangelog({
                repoURL: () => "https://github.com/CrychicTeam/CrychicDoc",
                mapAuthors: [
                    {
                        name: "M1hono", // The name you want to display
                        username: "M1hono", // The username of the author which is used to summon github's link. (won't work with links options)
                        mapByNameAliases: [
                            "CrychicTeam",
                            "M1hono",
                            "m1hono",
                            "Guda chen",
                            "Customer service is currently offline.",
                        ], // Add the name you want to map, these names will be replaced with the name.
                        avatar: generateAvatarUrl("M1hono"), // The avatar of the author, normally it's the github avatar
                        // links: "https://gitee.com/CrychicTeam/CrychicDoc" Change to the url You want to link to
                    },
                    {
                        name: "skyraah",
                        username: "skyraah",
                        mapByNameAliases: ["cyciling", "skyraah"],
                        avatar: generateAvatarUrl("skyraah"),
                    },
                    {
                        name: "Eikidona",
                        username: "Eikidona",
                        mapByNameAliases: ["Nagasaki Soyo", "Eikidona"],
                        avatar: generateAvatarUrl("Eikidona"),
                    },
                    {
                        name: "Mango",
                        username: "EvanHsieh0415",
                        mapByNameAliases: ["EvanHsieh0415", "Mango"],
                        avatar: generateAvatarUrl("Mango-Minecraft-Project"),
                    },
                    {
                        name: "Gu-meng",
                        username: "Gu-meng",
                        mapByNameAliases: ["Gu-meng", "GuMeng"],
                        avatar: generateAvatarUrl("Gu-meng"),
                    },
                    {
                        name: "Wudji",
                        username: "Wudji",
                        mapByNameAliases: ["Wudji"],
                        avatar: generateAvatarUrl("Wudji"),
                    },
                    {
                        name: "Qi-Month",
                        username: "Qi-Month",
                        mapByNameAliases: ["Qi-Month"],
                        avatar: generateAvatarUrl("Qi-Month"),
                    },
                    {
                        name: "xiaoliziawa",
                        username: "xiaoliziawa",
                        mapByNameAliases: ["xiaoliziawa"],
                        avatar: generateAvatarUrl("xiaoliziawa"),
                    },
                ],
            }),
            GitChangelogMarkdownSection(),
            groupIconVitePlugin({
                customIcon: {
                    mcmeta: localIconLoader(
                        import.meta.url,
                        "../../docs/public/svg/minecraft.svg"
                    ),
                    json: localIconLoader(
                        import.meta.url,
                        "../../docs/public/svg/json.svg"
                    ),
                    md: localIconLoader(
                        import.meta.url,
                        "../../docs/public/svg/markdown.svg"
                    ),
                    kubejs: localIconLoader(
                        import.meta.url,
                        "../../docs/public/svg/kubejs.svg"
                    ),
                    js: "logos:javascript",
                    sh: localIconLoader(
                        import.meta.url,
                        "../../docs/public/svg/powershell.svg"
                    ),
                    npm: localIconLoader(
                        import.meta.url,
                        "../../docs/public/svg/npm.svg"
                    ),
                    ts: "logos:typescript-icon-round",
                    java: "logos:java",
                    css: "logos:css-3",
                    git: "logos:git-icon",
                },
            }),
            AutoImport({
                resolvers: [
                    TDesignResolver({
                        library: "vue-next",
                    }),
                ],
            }),
            Components({
                resolvers: [
                    TDesignResolver({
                        library: "vue-next",
                    }),
                ],
            }),
        ],
        // define: {
        // __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
        // },
    },
    head: [
        ["link", { rel: "icon", href: "https://docs.mihono.cn/favicon.ico" }],
    ],
    ignoreDeadLinks: true,
    transformHead(context: TransformContext) {
        const { pageData, siteData, title, description } = context;
        const assets = context.assets;

        // 现有字体预加载逻辑
        const fonts = (): string[] => {
            return [
                assets.find((file) => /JetBrainsMono-Regular\.\w+\.woff2/),
                assets.find(
                    (file) => /ChillRoundGothic_ExtraLight\.\w+\.woff2/
                ),
                assets.find((file) => /ChillRoundGothic_Light\.\w+\.woff2/),
                assets.find((file) => /ChillRoundGothic_Regular\.\w+\.woff2/),
            ].filter((value): value is string => value !== undefined);
        };

        const fontConfig = (): HeadConfig[] => {
            return fonts().map((font) => [
                "link",
                {
                    href: font,
                    as: "font",
                    type: "font/woff2",
                    crossorigin: "",
                },
            ]);
        };

        const siteUrl = new URL(
            siteData.base,
            "https://docs.mihono.cn"
        ).toString();

        const pageUrl = new URL(pageData.relativePath, siteUrl).toString();
        const imageUrl = new URL("/og/logo.png", siteUrl).toString();

        const ogTags: HeadConfig[] = [
            ["meta", { property: "og:title", content: title }],
            ["meta", { property: "og:description", content: description }],
            ["meta", { property: "og:type", content: "website" }],
            ["meta", { property: "og:url", content: pageUrl }],
            ["meta", { property: "og:image", content: imageUrl }],
            [
                "meta",
                { property: "og:image:alt", content: "Crychic Logo" },
            ],
            ["meta", { property: "og:site_name", content: siteData.title }],
            ["meta", { property: "og:locale", content: siteData.lang }],
        ];

        return [...ogTags, ...fontConfig()];
    },
};
