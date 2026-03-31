import { createSignal, For, Show } from 'solid-js';
import profileImage from './OIP-C.webp';

function App() {
  const [isDarkMode, setIsDarkMode] = createSignal(false);
  const [activeCategory, setActiveCategory] = createSignal('全部');
  const [hoveredProject, setHoveredProject] = createSignal(null);
  const [selectedProject, setSelectedProject] = createSignal(null);
  const [showModal, setShowModal] = createSignal(false);

  const campusExperiences = [
    {
      title: "暨南大学澳门学生联合会 | 活动部成员",
      details: ["组织活动与活动策划宣传（粤澳文化节，第二届\"回归杯\"...）"]
    },
    {
      title: "暨南大学摄影协会 | 新媒体部成员",
      details: ["负责暨南大学摄影协会公众号推文策划与排版"]
    },
    {
      title: "暨南大学时光机影视协会 | 拍摄部成员",
      details: ["负责MV和微电影拍摄，参与过MV拍摄"]
    },
    {
      title: "新闻与传播学院融媒体中心 | 摄制部成员",
      details: ["负责暨南大学新闻与传播学院公众号中的推文摄影（会议拍摄、讲座、活动等）与图片后期制作"]
    },
    {
      title: "暨南大学创意传播工作室 | 运营部成员",
      details: ["运营暨南大学官方号（编写推文策划案、参与数条公众号推文制作、统筹与发布小红书图文、管理暨南大学小红书账号）"]
    }
  ];

  const skills = [
    {
      name: "MS Office",
      details: ["Word：文档编辑与排版", "Excel：数据处理与分析", "PPT：演示文稿制作"]
    },
    {
      name: "剪映",
      details: ["视频剪辑与编辑", "视频调色"]
    },
    {
      name: "Lightroom",
      details: ["图片编辑与处理", "滤镜应用"]
    },
    {
      name: "Canva",
      details: ["PPT设计", "海报与宣传制作", "社交媒体设计"]
    },
    {
      name: "相机摄影",
      details: ["数码摄影基础", "构图与光线", "人像与活动拍摄"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "暨年新一年·年味暨园策划案",
      description: "暨南大学小红书号发布的年味暨园策划案；用校园地标为基础，加点新年元素。",
      category: "策划类",
      link: "https://www.xiaohongshu.com/explore/698dd9e3000000002800905a?xsec_token=ABhe4pO1zdHuEdigOrK7ZOjsXi6wp682qwCk0s0T4LXp8=&xsec_source=pc_user"
    },
    {
      id: 2,
      title: "下一站，上岸",
      description: "暨南大学小红书号发布的考研复试加油推文，负责统筹工作。",
      category: "策划类",
      link: "https://www.xiaohongshu.com/explore/69c2532a000000001f0044f9?xsec_token=ABRObOTnwcv4S8YkyvTu5E-AhSopOrdYw9RmKuc-p157A=&xsec_source=pc_search&source=web_explore_feed"
    },
    {
      id: 3,
      title: "＜20天！冲刺上岸！",
      description: "发布在暨南大学微信公众号的考研加油推文，负责拍摄工作。",
      category: "推文发布",
      link: "https://mp.weixin.qq.com/s/wB83Q19pRwrSCaEfb69tfQ"
    },
    {
      id: 4,
      title: "接力双冠，团体争先！新传健儿校运会上斩获多项冠军！",
      description: "发布在暨南大学新闻与传播学院公众号的校运会报道，负责拍摄工作。",
      category: "推文发布",
      link: "https://mp.weixin.qq.com/s/gI7Pymm3hvj8Ke6E2maQkw"
    },
    {
      id: 8,
      title: "AI创想营高校行·青春创燃计划",
      description: "南方财经全媒体集团联合可灵AI举办的高校巡回讲座，负责讲座的拍摄工作。",
      category: "推文发布",
      link: "https://mp.weixin.qq.com/s/MgfWf03ka6g9k2the00WPQ"
    },
    {
      id: 5,
      title: "建筑摄影",
      description: "地方建筑摄影作品，展示不同建筑的美感和结构。",
      category: "摄影作品",
      images: [
        "/images/IMG_0316.jpg",
        "/images/IMG_8998.jpg",
        "/images/IMG_9028.JPG"
      ]
    },
    {
      id: 6,
      title: "风光摄影",
      description: "自然风景与风光的摄影作品，展示不同场景的光影和色彩。",
      category: "摄影作品",
      images: [
        "/images/IMG_8872.JPG",
        "/images/IMG_8877.JPG",
        "/images/IMG_8889.JPG",
        "/images/IMG_8903.JPG",
        "/images/IMG_8912.JPG"
      ]
    },
    {
      id: 7,
      title: "网络短视频分析PPT",
      description: "基于python来分析，B站为平台，探讨哪一类视频更为热门。",
      category: "项目PPT",
      images: [
        "/images/屏幕截图 2026-03-15 153227.jpg"
      ]
    }
  ];

  const filteredProjects = () => {
    if (activeCategory() === '全部') {
      return projects;
    } else {
      return projects.filter(project => project.category === activeCategory());
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode());
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openImageModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeImageModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };



  return (
    <div class={`app ${isDarkMode() ? 'dark-mode' : ''}`}>
      <header class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">梁庆龙</h1>
              <p class="hero-subtitle">网络与新媒体专业 | 暨南大学 | 本科</p>
              <p class="hero-description">暨南大学新闻与传播学院网络与新媒体专业本科在读，热爱拍摄与内容创作，专注于新媒体领域的学习与实践</p>
              <div class="hero-buttons">
                <button class="btn primary-btn" onClick={() => scrollToSection('projects')}>查看作品</button>
                <button class="btn secondary-btn" onClick={() => scrollToSection('contact')}>联系我</button>
              </div>
            </div>
            <div class="hero-image">
              <img 
                src={profileImage} 
                alt="个人头像" 
                class="profile-image"
              />
            </div>
          </div>
        </div>
        <div class="dark-mode-toggle" onClick={toggleDarkMode}>
          <i class={`fas ${isDarkMode() ? 'fa-sun' : 'fa-moon'}`}></i>
        </div>
      </header>
      
      <nav class="navbar">
        <div class="container">
          <div class="navbar-content">
            <a href="#home" class="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>个人主页</a>
            <ul class="navbar-menu">
              <li><a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>首页</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>关于我</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>作品</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>联系我</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
      <main>
        <section id="about" class="section">
          <div class="container">
            <h2 class="section-title">
              <span class="section-number">01</span>
              关于我
            </h2>
            <div class="about-content" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
              <div class="about-text">
                <p>我是梁庆龙，2006年出生，出生于澳门，自2024年于暨南大学新闻与传播学院网络与新媒体专业本科在读。</p>
                <p>毕业于广大中学，目前在暨南大学学习，专注于网络与新媒体领域的学习与实践。</p>
                <p>热爱拍摄与内容创作，致力于新媒体赛道上的发展。</p>
              </div>
              <div class="about-skills">
                <h3>校园经历</h3>
                <div class="campus-experience">
                  <For each={campusExperiences}>
                    {experience => (
                      <div class="experience-item">
                        <div class="experience-header">
                          <span class="experience-title">{experience.title}</span>
                        </div>
                        <div class="experience-content">
                          <For each={experience.details}>
                            {detail => <p>{detail}</p>}
                          </For>
                        </div>
                      </div>
                    )}
                  </For>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '2rem', width: '100%', flexWrap: 'nowrap' }}>
                <div class="about-skills" style={{ flex: '1', minWidth: '300px' }}>
                  <h3>基础技能</h3>
                  <div class="skills-experience">
                    <For each={skills}>
                      {skill => (
                        <div class="experience-item">
                          <div class="experience-header">
                            <span class="experience-title">{skill.name}</span>
                          </div>
                          <div class="experience-content">
                            <For each={skill.details}>
                              {detail => <p>{detail}</p>}
                            </For>
                          </div>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
                <div class="about-skills" style={{ flex: '1', minWidth: '300px' }}>
                  <h3>目前主修课程</h3>
                  <div class="skills-experience">
                    <div class="experience-item">
                      <div class="experience-header">
                        <span class="experience-title">点击查看课程列表</span>
                      </div>
                      <div class="experience-content">
                        <p>基础摄影</p>
                        <p>新媒体数学统计</p>
                        <p>Python程序设计</p>
                        <p>新闻学概论</p>
                        <p>传播学概论</p>
                        <p>媒介文化</p>
                        <p>新媒体数据分析与应用</p>
                        <p>网络传播概论</p>
                        <p>新媒体产品设计与项目管理</p>
                        <p>舆论学</p>
                        <p>湾区主播训练营</p>
                        <p>社会网络分析</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="projects" class="section">
          <div class="container">
            <h2 class="section-title">
              <span class="section-number">02</span>
              我的作品
            </h2>
            <div class="project-filters">
              <button 
                class={`filter-btn ${activeCategory() === '全部' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('全部')}
              >
                全部
              </button>
              <button 
                class={`filter-btn ${activeCategory() === '策划类' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('策划类')}
              >
                策划类
              </button>
              <button 
                class={`filter-btn ${activeCategory() === '推文发布' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('推文发布')}
              >
                推文发布
              </button>
              <button 
                class={`filter-btn ${activeCategory() === '摄影作品' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('摄影作品')}
              >
                摄影作品
              </button>
              <button 
                class={`filter-btn ${activeCategory() === '项目PPT' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('项目PPT')}
              >
                项目PPT
              </button>
            </div>
            <div class="project-grid">
              <For each={filteredProjects()}>
                {(project, index) => (
                  <div 
                    class="project-card"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div class={`project-card-inner ${hoveredProject() === index ? 'hovered' : ''}`}>
                      <div class="project-card-front">
                        <div class="project-category">{project.category}</div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                      <div class="project-card-back">
                        <Show when={project.link}>
                          <a href={project.link} target="_blank" class="btn primary-btn">查看原文</a>
                        </Show>
                        <Show when={project.images}>
                          <button class="btn primary-btn" onClick={() => openImageModal(project)}>
                            {project.category === '项目PPT' ? '展开项目' : '更多作品'}
                          </button>
                        </Show>
                        <Show when={!project.link && !project.images}>
                          <div class="no-link-message">暂无链接</div>
                        </Show>
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </section>
        
        <section id="contact" class="section">
          <div class="container">
            <h2 class="section-title">
              <span class="section-number">03</span>
              联系我
            </h2>
            <div class="contact-info">
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:noelleong9@qq.com">noelleong9@qq.com</a>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:leongnoel9@gmail.com">leongnoel9@gmail.com</a>
              </div>
              <div class="contact-item">
                <i class="fab fa-weixin"></i>
                <span>lql067788</span>
              </div>
              <div class="contact-item">
                <i class="fab fa-instagram"></i>
                <span>noel_0612</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-info">
              <h3>梁庆龙</h3>
              <p>网络与新媒体专业 | 本科</p>
            </div>

          </div>
          <div class="footer-bottom">
            <p>&copy; 梁庆龙. 保留所有权利.</p>
          </div>
        </div>
      </footer>
      
      {/* 图片展示模态框 */}
      <Show when={showModal()}>
        <div class="modal-overlay" onClick={closeImageModal}>
          <div class="modal-content" onClick={(e) => e.stopPropagation()}>
            <div class="modal-header">
              <h3>{selectedProject()?.title}</h3>
              <button class="modal-close" onClick={closeImageModal}>&times;</button>
            </div>
            <div class="modal-body">
              <div class="image-gallery">
                <For each={selectedProject()?.images || []}>
                  {(image, index) => (
                    <div class={`gallery-item ${selectedProject()?.category === '项目PPT' ? 'ppt-item' : ''}`}>
                      <img src={image} alt={`${selectedProject()?.title} - 图片 ${index + 1}`} />
                    </div>
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default App;
