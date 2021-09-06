Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DERCA] 30 Administrar a Organização Interna do DERCA","publishDate":"29/07/2021 10:54:44","pages":[{"id":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","name":"[DERCA] 30 Administrar a Organização Interna do DERCA","version":"1.0","author":"rene","image":"files\\diagrams\\DERCA]_30_Administrar_a_Organizacao_Interna_do_DERCA.png","isSubprocessPage":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","name":"[DERCA] 30 Administrar a Organização Interna do DERCA","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":793.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"a341ce9a-be75-4918-aabd-aa0e64977d72","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":139.0,"y":155.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"33546e08-0380-4b18-9d50-1081bd5b7fe3","name":"Realizar tarefas relacionadas à organização interna do DERCA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":216.0,"y":141.0}],"radius":0.0,"height":60.0,"width":170.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c77495df-bd64-4dfd-af3b-e0bf1d7750af","name":"É necessário registrar controle de frequência?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":448.0,"y":151.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"774ba0e2-bed1-4b99-a1b7-21b101944dcb","name":"É necessário solicitar férias?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":448.0,"y":381.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0b6d3a62-045b-47a2-b7b9-86e9c1a5c9ab","name":"Combinar com a coordenação do DERCA período de férias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":673.0,"y":364.0}],"radius":0.0,"height":73.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8e4243f7-5caf-457e-8065-466f33dac7ae","name":"[DAP] 17 Homologar Férias","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":916.0,"y":371.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DAP/%5bDAP%5d%2017%20Homologar%20F%c3%a9rias/#list","type":"url"}},{"id":"0222720b-4b5a-4a18-967e-38e6e8012ef0","name":"Aguardar e-mail de confirmação da homologação","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1129.0,"y":386.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"9b497557-7276-44d3-bdc0-6c07d3787c6d","name":"É necessário solicitar material de expediente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":448.0,"y":604.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"079a6923-9c85-4197-80ac-bfc45c943d4e","name":"Solicitar material de expediente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":702.0,"y":594.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"974786f4-6ff8-4f83-a74b-f49bc152a0e9","name":"[DSG] 19-1 Distribuir Materiais","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":927.0,"y":594.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DSG/DSG%2019%20Receber%20materiais%20de%20consumo/#diagram/fc857a50-3542-424b-8904-cbbddc500bb0","type":"url"}},{"id":"96e6a3d9-f119-4374-96fd-af4aa420eadc","name":"Registrar a frequência no SEI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":698.0,"y":141.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1542e89b-1399-47d6-8a69-c649e661caf4","name":"Mês finalizou-se?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":899.0,"y":151.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"2fd27024-c931-4baf-9bc1-dcc43952e616","name":"Atribuir o processo de controle de frequência à chefia imediata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1062.0,"y":141.0}],"radius":0.0,"height":60.0,"width":140.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"61beb739-b535-42f7-a6c4-32fd12eda840","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1257.0,"y":155.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"b117fa24-4048-45a8-8e89-7b93a30c5e38","name":"DERCA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":793.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","containerName":"[DERCA] 30 Administrar a Organização Interna do DERCA","isSubprocess":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","value":"[DERCA] 30 Administrar a Organização Interna do DERCA"},{"id":"b117fa24-4048-45a8-8e89-7b93a30c5e38","value":"DERCA"},{"id":"a341ce9a-be75-4918-aabd-aa0e64977d72","value":""},{"id":"079a6923-9c85-4197-80ac-bfc45c943d4e","value":"Solicitar material de expediente"},{"id":"33546e08-0380-4b18-9d50-1081bd5b7fe3","value":"Realizar tarefas relacionadas à organização interna do DERCA"},{"id":"96e6a3d9-f119-4374-96fd-af4aa420eadc","value":"Registrar a frequência no SEI"},{"id":"0b6d3a62-045b-47a2-b7b9-86e9c1a5c9ab","value":"Combinar com a coordenação do DERCA período de férias"},{"id":"1542e89b-1399-47d6-8a69-c649e661caf4","value":"Mês finalizou-se?"},{"id":"2fd27024-c931-4baf-9bc1-dcc43952e616","value":"Atribuir o processo de controle de frequência à chefia imediata"},{"id":"0222720b-4b5a-4a18-967e-38e6e8012ef0","value":"Aguardar e-mail de confirmação da homologação"},{"id":"61beb739-b535-42f7-a6c4-32fd12eda840","value":""},{"id":"c77495df-bd64-4dfd-af3b-e0bf1d7750af","value":"É necessário registrar controle de frequência?"},{"id":"9b497557-7276-44d3-bdc0-6c07d3787c6d","value":"É necessário solicitar material de expediente?"},{"id":"774ba0e2-bed1-4b99-a1b7-21b101944dcb","value":"É necessário solicitar férias?"},{"id":"8e4243f7-5caf-457e-8065-466f33dac7ae","value":"[DAP] 17 Homologar Férias"},{"id":"974786f4-6ff8-4f83-a74b-f49bc152a0e9","value":"[DSG] 19-1 Distribuir Materiais"},{"id":"2024dbad-de33-4450-b3c7-5219577249ab"},{"id":"ec2bd4ab-f089-41e6-84dc-96ca39d1879f"},{"id":"1c53bf9e-8d41-421a-bde8-b2eb923a507c"},{"id":"a8cd1ce5-ee3b-4df8-bcee-0951e090182e"},{"id":"a846658f-d14c-43d4-b4c4-2160ddbe9dd4"},{"id":"419576d6-6719-478e-8c05-cffeb2d01c80"},{"id":"7a661355-7abd-40ee-84b8-74331d34b3ea"},{"id":"434bf847-12a2-4a79-95fc-aab0a58b704a"},{"id":"53c93190-894d-40c7-aad9-8f9f7d51060b"},{"id":"ee3c3316-3b20-4419-8b75-b3b66af95043"}]}]}