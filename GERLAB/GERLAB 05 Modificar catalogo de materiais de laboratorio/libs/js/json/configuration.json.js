Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[GERLAB] 05 Modificar catálogo de materiais de laboratório","publishDate":"16/03/2021 15:34:14","pages":[{"id":"84266b5f-bda9-4e4b-8bc5-9e20eb83be3b","name":"[GERLAB] 05 Modificar catálogo de materiais de laboratório","version":"1.0","author":"vanessaks","image":"files\\diagrams\\GERLAB]_05_Modificar_catalogo_de_materiais_de_laboratorio.png","isSubprocessPage":false,"elements":[{"id":"eb785379-ac3c-4d09-a719-712d0aba6e24","name":"[GERLAB] 05 Modificar catálogo de materiais de laboratório","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":891.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"78ca54c7-202a-4458-9419-dc020078224a","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":125.0,"y":92.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"3027281f-4aef-451d-9c3b-ca0b31ca1fc8","name":"Enviar e-mail solicitando alteração no catálogo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.0,"y":74.0}],"radius":0.0,"height":67.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"804690fb-677a-497c-a451-e92caf07469c","name":"Analisar solicitação de alteração do catálogo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":213.0,"y":420.0}],"radius":0.0,"height":65.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cefc3987-4534-42d3-81b5-6289ee6c4757","name":"Tipo de solicitação","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":379.0,"y":432.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Inclusão","elementType":"SequenceFlow","properties":[]},{"name":"Alteração ou Exclusão","elementType":"SequenceFlow","properties":[]}]},{"id":"6added5a-64a7-4f96-be43-56b80ff17962","name":"Conferir presença do item no catálogo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":513.0,"y":304.0}],"radius":0.0,"height":60.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4757b12f-b54e-498c-b7a2-864477587e79","name":"Item existente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":680.0,"y":314.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b699536f-d1fc-4160-afd0-2e63a6f489b0","name":"Questionar se item do catálogo supre necessidades","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":789.0,"y":245.0}],"radius":0.0,"height":69.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7e1ec8c5-ca4e-45e0-86b3-f36d74a09be9","name":"Item aceito?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":881.0,"y":101.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"7d0a0f2e-92d7-4afe-b322-90127c47fe34","name":"Explicar diferenças entre os itens","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":997.0,"y":140.0}],"radius":0.0,"height":63.0,"width":92.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fc5e0b3d-f97a-4a6e-a5d8-147842f4e9d7","name":"Cancelar solicitação de inclusão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":996.0,"y":41.0}],"radius":0.0,"height":60.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0c7be626-7e31-47ee-a2b0-bc71d57e8e6c","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1023.0,"y":369.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Possui respaldo técnico?","elementType":"SequenceFlow","properties":[]}]},{"id":"cb973021-88ec-46cf-9eb6-37e184a10910","name":"Possui respaldo técnico?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1125.0,"y":369.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"50783422-6522-47b2-90a2-e1c0506467e0","name":"Aceitar inclusão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1273.0,"y":424.0}],"radius":0.0,"height":49.0,"width":84.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0f4bd70e-9d08-4b59-918d-e5bf93d36ff0","name":"Informar motivos ao solicitante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1275.0,"y":299.0}],"radius":0.0,"height":60.0,"width":82.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5053c1a3-9148-468a-a88e-25354f02237c","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1441.0,"y":314.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"90760df6-5154-4b42-854f-a938420b8474","name":"Analisar justificativa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":516.0,"y":531.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a3e80b3b-3858-4415-bb41-af5a0e06484c","name":"Modificação ou exclusão  aceita?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":680.0,"y":541.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"255d6e63-31de-4698-838b-9a34a69b44d3","name":"Alterar ou excluir item","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":873.0,"y":468.0}],"radius":0.0,"height":50.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4b8c50e7-22a6-42d0-844d-31ade7e391dd","name":"Modificar arquivo word do catálogo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1269.0,"y":523.0}],"radius":0.0,"height":60.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"43f27bee-f1c0-412c-9714-9403bdbf961c","name":"Gerar novo catálogo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1271.0,"y":749.0}],"radius":0.0,"height":56.0,"width":89.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"483a9db0-cc18-4f52-9dfc-2231e8e64a62","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1450.0,"y":762.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"e52f71ed-a7db-4efe-a001-0e8535c69048","name":"Informar motivos ao solicitante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":870.0,"y":591.0}],"radius":0.0,"height":55.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"33623713-9034-4bcb-a26e-ee10eb35c397","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1020.0,"y":603.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"408a8a05-4182-4ef3-8cd8-2b30a7a78238","name":"Solicitante","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":214.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7bcf4760-5a0b-4ecd-8e8d-72456b1a80d0","name":"GERLAB","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":234.0}],"radius":0.0,"height":441.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"9dda07f3-4507-4084-a28c-d1dd81bad4a5","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":675.0}],"radius":0.0,"height":236.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"84266b5f-bda9-4e4b-8bc5-9e20eb83be3b","containerName":"[GERLAB] 05 Modificar catálogo de materiais de laboratório","isSubprocess":false,"elements":[{"id":"eb785379-ac3c-4d09-a719-712d0aba6e24","value":"[GERLAB] 05 Modificar catálogo de materiais de laboratório"},{"id":"408a8a05-4182-4ef3-8cd8-2b30a7a78238","value":"Solicitante"},{"id":"7bcf4760-5a0b-4ecd-8e8d-72456b1a80d0","value":"GERLAB"},{"id":"9dda07f3-4507-4084-a28c-d1dd81bad4a5","value":"PROAD"},{"id":"3027281f-4aef-451d-9c3b-ca0b31ca1fc8","value":"Enviar e-mail solicitando alteração no catálogo"},{"id":"804690fb-677a-497c-a451-e92caf07469c","value":"Analisar solicitação de alteração do catálogo"},{"id":"cefc3987-4534-42d3-81b5-6289ee6c4757","value":"Tipo de solicitação"},{"id":"6added5a-64a7-4f96-be43-56b80ff17962","value":"Conferir presença do item no catálogo"},{"id":"90760df6-5154-4b42-854f-a938420b8474","value":"Analisar justificativa"},{"id":"4757b12f-b54e-498c-b7a2-864477587e79","value":"Item existente?"},{"id":"b699536f-d1fc-4160-afd0-2e63a6f489b0","value":"Questionar se item do catálogo supre necessidades"},{"id":"a3e80b3b-3858-4415-bb41-af5a0e06484c","value":"Modificação ou exclusão  aceita?"},{"id":"255d6e63-31de-4698-838b-9a34a69b44d3","value":"Alterar ou excluir item"},{"id":"e52f71ed-a7db-4efe-a001-0e8535c69048","value":"Informar motivos ao solicitante"},{"id":"4b8c50e7-22a6-42d0-844d-31ade7e391dd","value":"Modificar arquivo word do catálogo"},{"id":"43f27bee-f1c0-412c-9714-9403bdbf961c","value":"Gerar novo catálogo"},{"id":"483a9db0-cc18-4f52-9dfc-2231e8e64a62","value":""},{"id":"7d0a0f2e-92d7-4afe-b322-90127c47fe34","value":"Explicar diferenças entre os itens"},{"id":"fc5e0b3d-f97a-4a6e-a5d8-147842f4e9d7","value":"Cancelar solicitação de inclusão"},{"id":"7e1ec8c5-ca4e-45e0-86b3-f36d74a09be9","value":"Item aceito?"},{"id":"0c7be626-7e31-47ee-a2b0-bc71d57e8e6c","value":""},{"id":"0f4bd70e-9d08-4b59-918d-e5bf93d36ff0","value":"Informar motivos ao solicitante"},{"id":"50783422-6522-47b2-90a2-e1c0506467e0","value":"Aceitar inclusão"},{"id":"cb973021-88ec-46cf-9eb6-37e184a10910","value":"Possui respaldo técnico?"},{"id":"33623713-9034-4bcb-a26e-ee10eb35c397","value":""},{"id":"5053c1a3-9148-468a-a88e-25354f02237c","value":""},{"id":"78ca54c7-202a-4458-9419-dc020078224a","value":""},{"id":"c8c92957-59e0-439d-931f-b39dfb567b5a"},{"id":"d973098c-63c3-458b-9af3-5df291a5dff6"},{"id":"dc7a408e-cb48-4f3a-8edb-29093e8d8046"},{"id":"4cb27e74-a368-478b-b1d9-97f06d05fcbb"},{"id":"345429e8-ba8b-4419-9c3a-ca7be0c732ec"},{"id":"1bf9f4bc-2ce6-4e37-84e8-7cbcc419b14a"}]}]}