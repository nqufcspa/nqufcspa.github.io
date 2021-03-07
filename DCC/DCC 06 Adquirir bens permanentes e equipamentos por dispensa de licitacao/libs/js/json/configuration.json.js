Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DCC] 06 Adquirir bens permanentes e equipamentos por dispensa de licitação","publishDate":"07/03/2021 20:20:33","pages":[{"id":"36d95fc5-07fa-4d48-9c07-f7d2694da6ca","name":"[DCC] 06 Adquirir bens permanentes e equipamentos por dispensa de licitação","version":"1.0","author":"michelo","image":"files\\diagrams\\DCC]_06_Adquirir_bens_permanentes_e_equipamentos_por_dispensa_de_licitacao.png","isSubprocessPage":false,"elements":[{"id":"313d887f-b256-43a6-ad97-ee64586cf88f","name":"[DCC] 06 Adquirir bens permanentes e equipamentos por dispensa de licitação","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2553.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"f0d5689c-37c4-49a7-8f12-9a8ff79264c9","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":152.0,"y":64.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"2f736a9a-eba3-431c-9475-17169749ac96","name":"Abrir processo de aquisição de bens permanentes e equipamentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":222.0,"y":39.0}],"radius":0.0,"height":80.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"04459a98-ffb7-484e-9403-307de66e4921","name":"Incluir em PDF requisições de compras recebidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":381.5,"y":44.0}],"radius":0.0,"height":70.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b2fceaa8-e46b-4558-965a-40fba3c7957a","name":"Incluir em PDF orçamentos dos requisitantes ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":383.0,"y":166.0}],"radius":0.0,"height":60.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"348c8267-0c31-4bbe-a35d-21da99a0d9a3","name":"Incluir documento 104 - Termo de referência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":388.5,"y":284.5}],"radius":0.0,"height":65.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"39ffefd6-c759-4767-ad0e-86c4985cd5d4","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":555.0,"y":297.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b62e5df0-608c-44ab-a102-841fb0a2363b","name":"Incluir Documento 108 - Minuta de contrato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":525.5,"y":493.0}],"radius":0.0,"height":68.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"60c0d1e9-a67d-4ce1-8b2c-5af0b90c0565","name":"Incluir documento 830 - Classificação contábil","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":522.0,"y":708.0}],"radius":0.0,"height":62.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d22e3a45-e93b-49c3-bf35-354f05f118a8","name":"Incluir  documento 836- Disponibilidade orçamentária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":186.0,"y":875.0}],"radius":0.0,"height":68.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"95d4b0fb-c82a-4b3f-b0e2-4fea9f18a096","name":"Realizar consulta de preços de mercado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.0,"y":1223.0}],"radius":0.0,"height":63.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d5ec6d9c-46ad-4a3e-8d01-9f139f65ad91","name":"Incluir em PDF propostas comerciais  ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.0,"y":1316.0}],"radius":0.0,"height":65.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c37082a9-6387-483b-a2b2-179a46b9fbb1","name":"Fornecedor possui regularidade?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":225.0,"y":1425.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"1ff98997-8b5b-4a16-92c4-a039e7170b23","name":"Incluir documento 133- Notificação fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":356.0,"y":1327.0}],"radius":0.0,"height":64.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bbb681eb-6e9a-41a6-9443-ac81db8a27b6","name":"Enviar notificação ao fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":360.5,"y":1447.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f2d6d8f8-739d-41cc-a8ac-63063123be6a","name":"Aguardando regularização do fornecedor","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":390.5,"y":1551.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"1e148518-2b43-43f9-a96f-b77717d6947a","name":"Incluir em PDF comprovantes de regularidade e de habilitação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":192.0,"y":1520.0}],"radius":0.0,"height":92.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"081dffdb-630d-40c6-88e9-498e8e52818c","name":"Incluir documento 107 - \tPlanilha estimativa de preços","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":186.0,"y":1641.0}],"radius":0.0,"height":60.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b31b1892-43f3-47dd-b023-5fe8bf52f2dd","name":"Foram obtidas pelo menos três propostas","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":225.0,"y":1755.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"3ae474b1-e3f4-4276-8924-65035c8554e5","name":"Incluir documento 106 - \tAutorização para compra menos de 3 propostas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":191.5,"y":1835.0}],"radius":0.0,"height":79.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a3ddc605-f3bc-43b5-bbd1-b1b0b933ef5f","name":"Incluir documento 036 - Análise e Deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":193.0,"y":2024.0}],"radius":0.0,"height":67.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b87f753-2a87-4aea-bc6e-a5bfce145d2d","name":"Incluir em PDF comprovante de divulgação no Comprasnet","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":522.0,"y":1739.0}],"radius":0.0,"height":72.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a251e405-3e16-4289-98b0-344538b460b4","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":549.5,"y":1446.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"1d407636-510c-4310-ae52-d89367e9dab0","name":"Informar ao DCC os itens não adquiridos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":774.0,"y":1436.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9e2665ca-e42f-46a8-9475-5d5a2b4bb7e5","name":"Prosseguir com a contratação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":799.0,"y":1317.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"628824ec-55b7-4464-b06b-215e3c4f4303","name":"Incluir documento   986 -  Nota de empenho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":764.0,"y":920.25}],"radius":0.0,"height":63.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2491a9e5-ecdb-4514-9a64-670488a08731","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":997.0,"y":931.75}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"af80efe0-b5d9-4fa4-b386-13b1fbbcff6b","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1002.0,"y":678.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"6e507157-d4ea-4f79-a330-ae2ac9ebf0d0","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1002.0,"y":2024.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"840d8009-bb5d-47aa-91f0-790e5e78378e","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1116.0,"y":931.75}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"00b719dc-c29a-458a-997d-a506c436c0e1","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1244.0,"y":931.75}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"86c802e3-675a-4c67-a2c5-24c3de06112c","name":"Enviar empenho aos fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1422.0,"y":921.75}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"06a816f6-dd39-4102-ae01-3d888e5e45c9","name":"Incluir em PDF comprovantes de recebimento de e-mail","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1409.0,"y":1010.0}],"radius":0.0,"height":66.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a60c470d-cd9b-486d-a9a7-4c5bf2561ac8","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1415.0,"y":1101.0}],"radius":0.0,"height":69.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6fc3ee74-19bd-4a59-ad6e-7d73a5583438","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1213.0,"y":823.0}],"radius":0.0,"height":66.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e1176146-98e8-4b1b-b43e-72ccc9d150d2","name":"[DCC] 10 Formalizar contrato para aquisição de bens permanentes e equipamentos","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1219.0,"y":493.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DCC/DCC%2010%20Formalizar%20contrato%20para%20aquisi%C3%A7%C3%A3o%20de%20bens%20permanentes%20e%20equipamentos/#list","type":"url"}},{"id":"4cfea503-e1d0-45ad-9cbf-3956b6138f48","name":"[DSG] 18 Receber bens permanentes e equipamentos","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1422.5,"y":2193.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DSG/DSG%2018%20Receber%20bens%20permanentes%20e%20equipamentos/#list","type":"url"}},{"id":"53822286-8b28-4a79-a07a-3313d74fa9e8","name":"Anexar processos de recebimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1422.5,"y":2289.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"03e7e243-24ae-42ff-ac1d-87d19536acdf","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1422.0,"y":2438.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1f0d4fcf-3bc7-46fc-96a5-67d8aad21079","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1623.0,"y":2453.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"c72c42ec-a593-49bc-bbef-b97184e4e0c7","name":"DCC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":400.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0a6ec7c6-9bd1-4607-a6f2-c646986da959","name":"DICONT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":420.0}],"radius":0.0,"height":199.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"521a043a-2647-4b17-b627-4c3554e271e4","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":619.0}],"radius":0.0,"height":183.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"68400e85-7f17-45e5-bf2b-fe7b4f738f94","name":"DEO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":802.0}],"radius":0.0,"height":399.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6c52dab4-e24d-4e95-be72-59336259ce5f","name":"DICOMP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1201.0}],"radius":0.0,"height":773.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1625ead1-ffb6-45c9-a415-de3dff6a23e5","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1974.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7534bd43-df79-4df0-bcad-13cfdf253203","name":"DIPAT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2174.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"545bd41f-46c9-41e4-aebb-224f76d5cf14","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2374.0}],"radius":0.0,"height":199.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"36d95fc5-07fa-4d48-9c07-f7d2694da6ca","containerName":"[DCC] 06 Adquirir bens permanentes e equipamentos por dispensa de licitação","isSubprocess":false,"elements":[{"id":"313d887f-b256-43a6-ad97-ee64586cf88f","value":"[DCC] 06 Adquirir bens permanentes e equipamentos por dispensa de licitação"},{"id":"c72c42ec-a593-49bc-bbef-b97184e4e0c7","value":"DCC"},{"id":"0a6ec7c6-9bd1-4607-a6f2-c646986da959","value":"DICONT"},{"id":"521a043a-2647-4b17-b627-4c3554e271e4","value":"DCF"},{"id":"68400e85-7f17-45e5-bf2b-fe7b4f738f94","value":"DEO"},{"id":"6c52dab4-e24d-4e95-be72-59336259ce5f","value":"DICOMP"},{"id":"1625ead1-ffb6-45c9-a415-de3dff6a23e5","value":"PROAD"},{"id":"7534bd43-df79-4df0-bcad-13cfdf253203","value":"DIPAT"},{"id":"545bd41f-46c9-41e4-aebb-224f76d5cf14","value":"DIARQ"},{"id":"2f736a9a-eba3-431c-9475-17169749ac96","value":"Abrir processo de aquisição de bens permanentes e equipamentos"},{"id":"04459a98-ffb7-484e-9403-307de66e4921","value":"Incluir em PDF requisições de compras recebidas"},{"id":"b2fceaa8-e46b-4558-965a-40fba3c7957a","value":"Incluir em PDF orçamentos dos requisitantes "},{"id":"348c8267-0c31-4bbe-a35d-21da99a0d9a3","value":"Incluir documento 104 - Termo de referência"},{"id":"95d4b0fb-c82a-4b3f-b0e2-4fea9f18a096","value":"Realizar consulta de preços de mercado"},{"id":"081dffdb-630d-40c6-88e9-498e8e52818c","value":"Incluir documento 107 - \tPlanilha estimativa de preços"},{"id":"8b87f753-2a87-4aea-bc6e-a5bfce145d2d","value":"Incluir em PDF comprovante de divulgação no Comprasnet"},{"id":"628824ec-55b7-4464-b06b-215e3c4f4303","value":"Incluir documento   986 -  Nota de empenho"},{"id":"2491a9e5-ecdb-4514-9a64-670488a08731","value":""},{"id":"af80efe0-b5d9-4fa4-b386-13b1fbbcff6b","value":"Assinar documento em bloco"},{"id":"6e507157-d4ea-4f79-a330-ae2ac9ebf0d0","value":"Assinar documento em bloco"},{"id":"a60c470d-cd9b-486d-a9a7-4c5bf2561ac8","value":"Incluir documento 872 - Despacho simples"},{"id":"60c0d1e9-a67d-4ce1-8b2c-5af0b90c0565","value":"Incluir documento 830 - Classificação contábil"},{"id":"d22e3a45-e93b-49c3-bf35-354f05f118a8","value":"Incluir  documento 836- Disponibilidade orçamentária"},{"id":"a251e405-3e16-4289-98b0-344538b460b4","value":""},{"id":"1d407636-510c-4310-ae52-d89367e9dab0","value":"Informar ao DCC os itens não adquiridos"},{"id":"06a816f6-dd39-4102-ae01-3d888e5e45c9","value":"Incluir em PDF comprovantes de recebimento de e-mail"},{"id":"39ffefd6-c759-4767-ad0e-86c4985cd5d4","value":""},{"id":"e1176146-98e8-4b1b-b43e-72ccc9d150d2","value":"[DCC] 10 Formalizar contrato para aquisição de bens permanentes e equipamentos"},{"id":"d5ec6d9c-46ad-4a3e-8d01-9f139f65ad91","value":"Incluir em PDF propostas comerciais  "},{"id":"00b719dc-c29a-458a-997d-a506c436c0e1","value":""},{"id":"b62e5df0-608c-44ab-a102-841fb0a2363b","value":"Incluir Documento 108 - Minuta de contrato"},{"id":"6fc3ee74-19bd-4a59-ad6e-7d73a5583438","value":"Incluir documento 872 - Despacho simples"},{"id":"86c802e3-675a-4c67-a2c5-24c3de06112c","value":"Enviar empenho aos fornecedores"},{"id":"4cfea503-e1d0-45ad-9cbf-3956b6138f48","value":"[DSG] 18 Receber bens permanentes e equipamentos"},{"id":"840d8009-bb5d-47aa-91f0-790e5e78378e","value":""},{"id":"f0d5689c-37c4-49a7-8f12-9a8ff79264c9","value":""},{"id":"b31b1892-43f3-47dd-b023-5fe8bf52f2dd","value":"Foram obtidas pelo menos três propostas"},{"id":"3ae474b1-e3f4-4276-8924-65035c8554e5","value":"Incluir documento 106 - \tAutorização para compra menos de 3 propostas"},{"id":"a3ddc605-f3bc-43b5-bbd1-b1b0b933ef5f","value":"Incluir documento 036 - Análise e Deliberação"},{"id":"03e7e243-24ae-42ff-ac1d-87d19536acdf","value":"Realizar tratamento arquivístico"},{"id":"1f0d4fcf-3bc7-46fc-96a5-67d8aad21079","value":""},{"id":"53822286-8b28-4a79-a07a-3313d74fa9e8","value":"Anexar processos de recebimento"},{"id":"c37082a9-6387-483b-a2b2-179a46b9fbb1","value":"Fornecedor possui regularidade?"},{"id":"1e148518-2b43-43f9-a96f-b77717d6947a","value":"Incluir em PDF comprovantes de regularidade e de habilitação "},{"id":"1ff98997-8b5b-4a16-92c4-a039e7170b23","value":"Incluir documento 133- Notificação fornecedores"},{"id":"f2d6d8f8-739d-41cc-a8ac-63063123be6a","value":"Aguardando regularização do fornecedor"},{"id":"9e2665ca-e42f-46a8-9475-5d5a2b4bb7e5","value":"Prosseguir com a contratação?"},{"id":"bbb681eb-6e9a-41a6-9443-ac81db8a27b6","value":"Enviar notificação ao fornecedor"},{"id":"f79c597a-521e-458f-91cb-449d24b0219f"},{"id":"2c5a6a81-df5c-40fe-aa26-036eaac05d5a"},{"id":"eb28eb97-9fcc-4610-9496-80e0f9a67103"},{"id":"9b78c5c1-2bd1-494d-a116-e05317df1d59"},{"id":"2d6555e3-d706-4f7f-9c08-1da2ac0aabda"},{"id":"8d0643d1-c068-47ba-98e8-a26e24977a9c"},{"id":"3dcd27de-1b11-4881-8982-85400c37502c"},{"id":"1af73a52-aacd-4ecc-95b1-0b2c3e14b06a"},{"id":"6a0c6e30-7657-4117-adda-71b402252b03"},{"id":"df5ac9e1-e492-41a2-8fc7-b661313a3c1e"},{"id":"afd1549a-05db-4833-9846-9d4b69b00902"},{"id":"de9976e5-03fa-4acc-8921-25587d3961a5"},{"id":"44080f69-67a5-45a2-9725-93707acf821e"},{"id":"974ea493-4b96-49d6-9d29-56e4b02ae1ae"},{"id":"07bf4adf-082b-4dca-97df-9cae97c046e6"},{"id":"57302d63-a46f-4a76-8af7-cd4e76a6a263"},{"id":"5657f211-ceb5-4baa-9ca1-359bc4e15e5a"},{"id":"ba3ddc72-3ceb-45ac-ae7f-c6c2ed19f8d5"},{"id":"f3ed1cc9-09e5-4109-bf36-9be31df3cf0f"},{"id":"fd0d7eaa-9b56-46ff-ad7f-e45a2e25d7d4"}]}]}