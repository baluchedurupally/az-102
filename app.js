const skillAreas = [
  'Plan and manage an Azure AI solution (20–25%)',
  'Implement generative AI solutions (15–20%)',
  'Implement an agentic solution (5–10%)',
  'Implement computer vision solutions (10–15%)',
  'Implement natural language processing solutions (15–20%)',
  'Implement knowledge mining and information extraction solutions (15–20%)'
];

const learningPaths = [
  {
    title: '1. Get started with Azure AI Services',
    tag: 'Foundation',
    summary: 'Provision, secure, monitor, deploy, and govern Azure AI and Foundry resources.',
    modules: [
      ['0 - Course Overview', 'Understand the exam shape, service families, SDKs, APIs, and end-to-end solution lifecycle.', 'plan/manage'],
      ['1.0 - Get started with Azure AI Services', 'Know what Azure AI services are, when to use multi-service vs single-service resources, and how solutions are composed.', 'plan/manage'],
      ['1.1 - Prepare to develop AI solutions on Azure', 'Set up subscriptions, resource groups, identity, SDK environment, and service endpoints.', 'plan/manage'],
      ['1.2 - Create and consume Azure AI services', 'Use portal, REST, and SDKs to provision and call services correctly.', 'plan/manage'],
      ['1.3 - Secure Azure AI services', 'Manage keys, RBAC, managed identities, and private access patterns.', 'plan/manage'],
      ['1.4 - Monitor Azure AI services', 'Use metrics, diagnostics, quotas, and logging for healthy operations.', 'plan/manage'],
      ['1.5 - Deploy Azure AI services in containers', 'Understand containerized deployments, disconnected scenarios, and scaling tradeoffs.', 'plan/manage'],
      ['1.6 - Use AI responsibly with Azure AI Content Safety', 'Apply moderation, harmful content filtering, and Responsible AI practices.', 'plan/manage']
    ]
  },
  {
    title: '2. Create computer vision solutions with Azure AI Vision',
    tag: 'Vision',
    summary: 'Cover image analysis, OCR, custom vision-style classification, object detection, faces, and video.',
    modules: [
      ['2.0 - Create computer vision solutions with Azure AI Vision', 'Learn the problem space: image analysis, OCR, object detection, and service fit.', 'vision'],
      ['2.1 - Analyze images', 'Use image analysis for captions, tags, dense captions, and visual descriptions.', 'vision'],
      ['2.2 - Image classification with custom Azure AI Vision models', 'Train and evaluate custom classifiers; know labels, imbalance, and evaluation basics.', 'vision'],
      ['2.3 - Classify images', 'Understand inference flow, endpoints, and result interpretation.', 'vision'],
      ['2.4 - Detect objects in images', 'Use bounding boxes, confidence thresholds, and detection tradeoffs.', 'vision'],
      ['2.5 - Detect, analyze, and recognize faces', 'Know identity-sensitive use cases and restrictions around face-related capabilities.', 'vision'],
      ['2.6 - Read text in images and documents with Azure AI Vision Service', 'Use OCR and read APIs for image/document text extraction.', 'vision'],
      ['2.7 - Analyze video', 'Understand video indexing, scene detection, and event-oriented analysis.', 'vision']
    ]
  },
  {
    title: '3. Develop natural language processing solutions with Azure AI Services',
    tag: 'Language',
    summary: 'Text analytics, question answering, CLU, custom text classification, custom NER, translation, and speech.',
    modules: [
      ['3.0 - Develop natural language processing solutions with Azure AI Services', 'Map NLP workloads to Azure AI Language, Translator, and Speech.', 'nlp'],
      ['3.1 - Analyze text with Azure AI Language', 'Sentiment, key phrase extraction, entity recognition, summarization, and PII patterns.', 'nlp'],
      ['3.2 - Create question answering solutions with Azure AI Language', 'Build FAQ and knowledge Q&A solutions, curate sources, and test answer quality.', 'nlp'],
      ['3.3 - Build a conversational language understanding model', 'Model intents, entities, utterances, orchestration, and evaluation.', 'nlp'],
      ['3.4 - Create a custom text classification solution', 'Train custom classifiers and interpret precision, recall, and confusion areas.', 'nlp'],
      ['3.5 - Custom named entity recognition', 'Extract domain entities from custom corpora and label effectively.', 'nlp'],
      ['3.6 - Translate text with Azure AI Translator service', 'Language pairs, custom translator basics, and throughput considerations.', 'nlp'],
      ['3.7 - Create speech-enabled apps with Azure AI services', 'Speech-to-text, text-to-speech, voices, and speech app patterns.', 'nlp'],
      ['3.8 - Translate speech with the Azure AI Speech service', 'Use real-time and batch translation scenarios with multilingual design.', 'nlp']
    ]
  },
  {
    title: '4. Implement knowledge mining solutions with Azure AI Search',
    tag: 'Search',
    summary: 'Indexes, skillsets, knowledge store, semantic ranking, vector search, custom skills, and maintenance.',
    modules: [
      ['4.0 - Implement knowledge mining with Azure AI Search', 'Understand indexing pipelines, enrichments, retrieval, and search architecture.', 'search'],
      ['4.1 - Create an Azure AI Search solution', 'Design data sources, indexes, indexers, and query patterns.', 'search'],
      ['4.2 - Create a Custom Skill for Azure AI Search', 'Extend enrichment pipelines with custom web API skills.', 'search'],
      ['4.3 - Create a knowledge store with Azure AI Search', 'Project enriched data into tables/objects for downstream analytics.', 'search'],
      ['4.4 - Enrich your data with Azure AI Language', 'Apply language enrichment inside search pipelines.', 'search'],
      ['4.5 - Implement advanced search features in Azure AI Search', 'Facets, filters, scoring profiles, analyzers, and synonym maps.', 'search'],
      ['4.6 - Build an Azure Machine Learning custom skill for Azure AI Search', 'Attach ML inferencing into the enrichment chain.', 'search'],
      ['4.7 - Search data outside the Azure platform using Azure Data Factory', 'Move and shape external data for search indexing.', 'search'],
      ['4.8 - Maintain an Azure AI Search solution', 'Handle updates, schedules, reindexing, schema changes, and ops basics.', 'search'],
      ['4.9 - Perform search reranking with semantic ranking', 'Use semantic ranking to improve relevance and answer quality.', 'search'],
      ['4.10 - Perform vector search and retrieval in Azure AI Search', 'Embeddings, vector fields, chunking, hybrid retrieval, and relevance tradeoffs.', 'search']
    ]
  },
  {
    title: '5. Develop solutions with Azure AI Document Intelligence',
    tag: 'Documents',
    summary: 'Prebuilt models, custom extraction, composed models, and end-to-end form/document workflows.',
    modules: [
      ['5.0 - Develop solutions with Azure AI Document Intelligence', 'Know when to use Document Intelligence vs Vision OCR vs custom pipelines.', 'documents'],
      ['5.1 - Plan an Azure AI Document Intelligence solution', 'Select model types, define documents, and plan training/validation flow.', 'documents'],
      ['5.2 - Use prebuilt Document Intelligence models', 'Leverage invoices, receipts, IDs, contracts, and layout extraction.', 'documents'],
      ['5.3 - Extract data from forms with Azure Document Intelligence', 'Train custom extraction models and validate field accuracy.', 'documents'],
      ['5.4 - Create a composed Document Intelligence model', 'Route multiple document types through composed models.', 'documents']
    ]
  },
  {
    title: '6. Develop Generative AI solutions with Azure OpenAI Service',
    tag: 'GenAI',
    summary: 'Azure OpenAI basics, prompting, code generation, RAG, and image generation.',
    modules: [
      ['6.0 - Develop Generative AI solutions with Azure OpenAI Service', 'Frame generative AI workloads, model families, tokens, and safety.', 'genai'],
      ['6.1 - Get started with Azure OpenAI Service', 'Provision resources, deployments, endpoints, and authentication.', 'genai'],
      ['6.2 - Build natural language solutions with Azure OpenAI Service', 'Chat, completions, summarization, extraction, and workflow design.', 'genai'],
      ['6.3 - Apply prompt engineering with Azure OpenAI Service', 'System prompts, grounding, delimiters, examples, safety, and evaluation.', 'genai'],
      ['6.4 - Generate code with Azure OpenAI Service', 'Code generation, explanation, transformation, and test-oriented prompting.', 'genai'],
      ['6.5 - Implement Retrieval Augmented Generation (RAG) with Azure OpenAI Service', 'Chunking, embeddings, vector search, citations, and retrieval strategy.', 'genai'],
      ['6.6 - Generate images with Azure OpenAI Service', 'Image generation basics, prompt control, moderation, and use-case fit.', 'genai']
    ]
  },
  {
    title: '7. Current exam overlay: agentic and Foundry-first topics',
    tag: 'Newer exam focus',
    summary: 'Bridges older study notes with the current AI-102 exam skill map.',
    modules: [
      ['7.1 - Plan, create and deploy a Microsoft Foundry Service', 'Choose models, deployment types, SDKs, endpoints, and CI/CD approach.', 'agentic'],
      ['7.2 - Manage, monitor, and secure a Microsoft Foundry Service', 'Track deployments, content filters, secrets, RBAC, quotas, and diagnostics.', 'agentic'],
      ['7.3 - Implement an agentic solution', 'Know agent patterns, tool use, orchestration, grounding, and evaluation at a practical level.', 'agentic'],
      ['7.4 - Information extraction crossover', 'Link Document Intelligence, OCR, Azure AI Language, and Search in one end-to-end flow.', 'agentic']
    ]
  }
];

const flashcards = [
  ['When do you use Azure AI Search vector retrieval?', 'When you need embedding-based semantic retrieval, often for RAG or hybrid search.'],
  ['What is a knowledge store in Azure AI Search?', 'A projected store of enriched data for downstream analytics or exploration.'],
  ['Why use a composed Document Intelligence model?', 'To route different document layouts through one endpoint while keeping specialized extraction accuracy.'],
  ['What is the role of Content Safety in AI-102 prep?', 'It supports responsible AI through harmful content detection, filtering, and policy enforcement.'],
  ['What does semantic ranking improve?', 'Relevance by reranking results based on meaning rather than only lexical matching.'],
  ['What is RAG?', 'Retrieval Augmented Generation combines model generation with retrieved grounded content.'],
  ['What is CLU?', 'Conversational Language Understanding for intents, entities, and conversation-oriented NLP.'],
  ['What is the difference between prebuilt and custom Document Intelligence models?', 'Prebuilt covers common document types; custom is trained for your own layouts and fields.']
];

const quizQuestions = [
  {
    q: 'Which Azure service is most central for hybrid keyword + vector retrieval in AI-102?',
    options: ['Azure AI Vision', 'Azure AI Search', 'Azure AI Speech', 'Azure Data Factory'],
    answer: 1
  },
  {
    q: 'Which module is most directly tied to grounding a RAG solution?',
    options: ['2.4 Detect objects', '4.10 Vector search and retrieval', '3.8 Speech translation', '5.4 Composed model'],
    answer: 1
  },
  {
    q: 'What is the best reason to use a composed Document Intelligence model?',
    options: ['To add speech output', 'To classify images faster', 'To handle multiple document layouts through one solution', 'To replace Azure AI Search'],
    answer: 2
  },
  {
    q: 'Which topic best fits Responsible AI and content moderation?',
    options: ['1.6 Azure AI Content Safety', '2.1 Analyze images', '3.6 Translate text', '4.3 Knowledge store'],
    answer: 0
  },
  {
    q: 'What does semantic ranking primarily improve?',
    options: ['Storage cost', 'Search result relevance', 'Container startup time', 'Speech latency'],
    answer: 1
  },
  {
    q: 'Which current AI-102 area is newer and not fully covered by many older notes?',
    options: ['Agentic solution implementation', 'Basic OCR', 'Text translation', 'Speech synthesis'],
    answer: 0
  },
  {
    q: 'Which service is most suitable for extracting line items from invoices?',
    options: ['Azure AI Translator', 'Document Intelligence prebuilt invoice model', 'Azure AI Speech', 'Content Safety'],
    answer: 1
  },
  {
    q: 'What is a custom skill in Azure AI Search?',
    options: ['A user role', 'A custom enrichment step, often via a web API', 'A pricing tier', 'A speech voice'],
    answer: 1
  },
  {
    q: 'Which module best teaches intent/entity modelling?',
    options: ['3.3 Build a conversational language understanding model', '2.6 Read text in images', '4.8 Maintain search solution', '6.6 Generate images'],
    answer: 0
  },
  {
    q: 'Which domain combines Azure OpenAI with retrieved enterprise content?',
    options: ['RAG', 'OCR', 'Speech synthesis', 'Face detection'],
    answer: 0
  }
];

const state = {
  search: '',
  flashIndex: 0
};

const progressKey = 'ai102_progress_v3';
const quizKey = 'ai102_quiz_v3';
let progress = JSON.parse(localStorage.getItem(progressKey) || '{}');

function allModules() {
  return learningPaths.flatMap(path => path.modules.map(m => ({ path: path.title, tag: path.tag, title: m[0], summary: m[1], domain: m[2] })));
}

function renderSkillPills() {
  const wrap = document.getElementById('skillPills');
  wrap.innerHTML = skillAreas.map(s => `<span class="skill-pill">${s}</span>`).join('');
}

function renderModules() {
  const target = document.getElementById('moduleGroups');
  const query = state.search.toLowerCase();
  target.innerHTML = '';

  learningPaths.forEach((path, pathIndex) => {
    const filtered = path.modules.filter(([title, summary, domain]) => {
      const blob = `${path.title} ${path.summary} ${title} ${summary} ${domain}`.toLowerCase();
      return blob.includes(query);
    });
    if (!filtered.length) return;

    const doneCount = filtered.filter(([title]) => progress[title]).length;
    const card = document.createElement('article');
    card.className = 'path-card';
    card.innerHTML = `
      <div class="path-head">
        <div>
          <h3>${path.title}</h3>
          <p class="muted">${path.summary}</p>
        </div>
        <span class="path-tag">${path.tag} · ${doneCount}/${filtered.length}</span>
      </div>
      <div class="module-list"></div>
    `;

    const list = card.querySelector('.module-list');
    filtered.forEach(([title, summary, domain], idx) => {
      const checked = !!progress[title];
      const item = document.createElement('div');
      item.className = 'module-card';
      item.innerHTML = `
        <div class="module-row">
          <div>
            <h4 class="module-title">${title}</h4>
            <p class="module-summary">${summary}</p>
            <div class="module-meta">
              <span class="badge">${domain}</span>
              <span class="badge">Repo-aligned</span>
              ${pathIndex === 6 ? '<span class="badge">Current exam overlay</span>' : ''}
            </div>
          </div>
        </div>
        <label class="checkbox-wrap">
          <input type="checkbox" data-module="${title}" ${checked ? 'checked' : ''} />
          <span>Mark complete</span>
        </label>
      `;
      list.appendChild(item);
    });

    target.appendChild(card);
  });

  document.querySelectorAll('input[data-module]').forEach(cb => {
    cb.addEventListener('change', e => {
      progress[e.target.dataset.module] = e.target.checked;
      saveAndRefresh();
    });
  });
}

function updateStats() {
  const modules = allModules();
  const total = modules.length;
  const done = modules.filter(m => progress[m.title]).length;
  document.getElementById('moduleCount').textContent = total;
  document.getElementById('completedCount').textContent = done;
  document.getElementById('completionPct').textContent = `${Math.round(done / total * 100) || 0}%`;
  const next = modules.find(m => !progress[m.title]);
  document.getElementById('nextFocus').textContent = next ? next.title : 'All modules done';
}

function renderFlashcard() {
  const [q, a] = flashcards[state.flashIndex];
  document.getElementById('flashcardIndex').textContent = `${state.flashIndex + 1} / ${flashcards.length}`;
  document.getElementById('flashQuestion').textContent = q;
  document.getElementById('flashAnswer').textContent = a;
  document.getElementById('flashcard').classList.remove('flipped');
}

function renderQuiz() {
  const target = document.getElementById('quizContainer');
  const saved = JSON.parse(localStorage.getItem(quizKey) || '{}');
  target.innerHTML = quizQuestions.map((item, idx) => `
    <div class="quiz-q">
      <div><strong>${idx + 1}. ${item.q}</strong></div>
      <div class="quiz-options">
        ${item.options.map((opt, oi) => `
          <label>
            <input type="radio" name="q${idx}" value="${oi}" ${saved[`q${idx}`] == oi ? 'checked' : ''} />
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function submitQuiz() {
  let score = 0;
  const saved = {};
  quizQuestions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if (selected) {
      saved[`q${idx}`] = Number(selected.value);
      if (Number(selected.value) === q.answer) score += 1;
    }
  });
  localStorage.setItem(quizKey, JSON.stringify(saved));
  document.getElementById('quizResult').textContent = `Score: ${score} / ${quizQuestions.length} · ${score >= 8 ? 'Strong' : score >= 6 ? 'Good, but revise weak areas' : 'Needs more review'}`;
}

function saveAndRefresh() {
  localStorage.setItem(progressKey, JSON.stringify(progress));
  updateStats();
  renderModules();
}

function initTabs() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
}

function init() {
  renderSkillPills();
  renderModules();
  updateStats();
  renderFlashcard();
  renderQuiz();
  initTabs();

  document.getElementById('searchBox').addEventListener('input', e => {
    state.search = e.target.value || '';
    renderModules();
  });

  document.getElementById('flipFlashcard').addEventListener('click', () => {
    document.getElementById('flashcard').classList.toggle('flipped');
  });
  document.getElementById('prevFlashcard').addEventListener('click', () => {
    state.flashIndex = (state.flashIndex - 1 + flashcards.length) % flashcards.length;
    renderFlashcard();
  });
  document.getElementById('nextFlashcard').addEventListener('click', () => {
    state.flashIndex = (state.flashIndex + 1) % flashcards.length;
    renderFlashcard();
  });
  document.getElementById('submitQuiz').addEventListener('click', submitQuiz);
  document.getElementById('resetProgress').addEventListener('click', () => {
    if (!confirm('Reset all progress and quiz answers on this device?')) return;
    progress = {};
    localStorage.removeItem(progressKey);
    localStorage.removeItem(quizKey);
    renderQuiz();
    saveAndRefresh();
    document.getElementById('quizResult').textContent = '';
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

init();
